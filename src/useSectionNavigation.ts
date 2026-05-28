import { useEffect, useRef } from 'react';

const NAVIGATION_LOCK_MS = 850;
const MIN_WHEEL_DELTA = 18;
const FREE_SCROLL_SECTION_ID = 'projects';
const PROJECTS_EDGE_THRESHOLD = 72;
const HEADER_OFFSET = 88;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function isInteractiveElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest('a, button, input, textarea, select, summary, [contenteditable="true"], [role="button"], [role="link"]'));
}

function getSections(sectionIds: readonly string[]) {
  return sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
}

function getCurrentSectionIndex(sections: HTMLElement[]) {
  const viewportAnchor = window.innerHeight * 0.38;

  return sections.reduce((nearestIndex, section, index) => {
    const currentDistance = Math.abs(section.getBoundingClientRect().top - viewportAnchor);
    const nearestDistance = Math.abs(sections[nearestIndex].getBoundingClientRect().top - viewportAnchor);

    return currentDistance < nearestDistance ? index : nearestIndex;
  }, 0);
}

function getSectionIndexById(sections: HTMLElement[], id: string) {
  return sections.findIndex((section) => section.id === id);
}

function isViewportInsideSection(section: HTMLElement) {
  const rect = section.getBoundingClientRect();

  return rect.top <= HEADER_OFFSET + PROJECTS_EDGE_THRESHOLD && rect.bottom >= window.innerHeight - PROJECTS_EDGE_THRESHOLD;
}

function canExitFreeScrollSection(section: HTMLElement, direction: 1 | -1) {
  const rect = section.getBoundingClientRect();

  if (direction > 0) {
    return rect.bottom <= window.innerHeight + PROJECTS_EDGE_THRESHOLD;
  }

  return rect.top >= HEADER_OFFSET - PROJECTS_EDGE_THRESHOLD;
}

function isDesktopNavigationEnabled() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useSectionNavigation(sectionIds: readonly string[]) {
  const isLockedRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clearLockTimeout = () => {
      if (lockTimeoutRef.current !== null) {
        window.clearTimeout(lockTimeoutRef.current);
        lockTimeoutRef.current = null;
      }
    };

    const unlockAfterDelay = () => {
      clearLockTimeout();
      lockTimeoutRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
        lockTimeoutRef.current = null;
      }, NAVIGATION_LOCK_MS);
    };

    const navigateBy = (direction: 1 | -1) => {
      if (!isDesktopNavigationEnabled() || isLockedRef.current) {
        return false;
      }

      const sections = getSections(sectionIds);

      if (sections.length === 0) {
        return false;
      }

      const freeScrollIndex = getSectionIndexById(sections, FREE_SCROLL_SECTION_ID);
      const freeScrollSection = freeScrollIndex >= 0 ? sections[freeScrollIndex] : null;
      const isInsideFreeScrollSection = freeScrollSection ? isViewportInsideSection(freeScrollSection) : false;
      const currentIndex = isInsideFreeScrollSection ? freeScrollIndex : getCurrentSectionIndex(sections);
      const currentSection = sections[currentIndex];

      if (currentSection?.id === FREE_SCROLL_SECTION_ID) {
        if (!canExitFreeScrollSection(currentSection, direction)) {
          return false;
        }
      }

      const nextIndex = clamp(currentIndex + direction, 0, sections.length - 1);
      const targetSection = sections[nextIndex];

      if (!targetSection || targetSection === currentSection) {
        return false;
      }

      isLockedRef.current = true;
      window.scrollTo({
        top: targetSection.offsetTop - HEADER_OFFSET,
        behavior: 'smooth',
      });
      unlockAfterDelay();

      return true;
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.defaultPrevented || Math.abs(event.deltaY) < MIN_WHEEL_DELTA || isInteractiveElement(event.target)) {
        return;
      }

      const didNavigate = navigateBy(event.deltaY > 0 ? 1 : -1);

      if (didNavigate) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || isInteractiveElement(event.target)) {
        return;
      }

      let didNavigate = false;

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        didNavigate = navigateBy(1);
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        didNavigate = navigateBy(-1);
      }

      if (didNavigate) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearLockTimeout();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sectionIds]);
}
