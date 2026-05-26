import { useEffect, useRef } from 'react';

const NAVIGATION_LOCK_MS = 850;
const MIN_WHEEL_DELTA = 8;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function isInteractiveElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest(
      'a, button, input, textarea, select, summary, [contenteditable="true"], [role="button"], [role="link"], [data-section-nav-ignore]',
    ),
  );
}

function canScrollInDirection(element: Element, deltaY: number) {
  let current: Element | null = element;

  while (current && current !== document.documentElement && current !== document.body) {
    const style = window.getComputedStyle(current);
    const canOverflow = /(auto|scroll)/.test(style.overflowY);
    const hasScrollableContent = current.scrollHeight > current.clientHeight + 1;

    if (canOverflow && hasScrollableContent) {
      const maxScrollTop = current.scrollHeight - current.clientHeight;
      const canScrollDown = deltaY > 0 && current.scrollTop < maxScrollTop - 1;
      const canScrollUp = deltaY < 0 && current.scrollTop > 1;

      if (canScrollDown || canScrollUp) {
        return true;
      }
    }

    current = current.parentElement;
  }

  return false;
}

function getSections(sectionIds: readonly string[]) {
  return sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
}

function getNearestSectionIndex(sections: HTMLElement[]) {
  if (sections.length === 0) {
    return 0;
  }

  const viewportAnchor = window.innerHeight * 0.18;

  return sections.reduce((nearestIndex, section, index) => {
    const currentDistance = Math.abs(section.getBoundingClientRect().top - viewportAnchor);
    const nearestDistance = Math.abs(sections[nearestIndex].getBoundingClientRect().top - viewportAnchor);

    return currentDistance < nearestDistance ? index : nearestIndex;
  }, 0);
}

export function useSectionNavigation(sectionIds: readonly string[]) {
  const activeIndexRef = useRef(0);
  const isLockedRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clearLockTimeout = () => {
      if (lockTimeoutRef.current !== null) {
        window.clearTimeout(lockTimeoutRef.current);
        lockTimeoutRef.current = null;
      }
    };

    const sections = getSections(sectionIds);

    const navigateTo = (index: number) => {
      const currentSections = getSections(sectionIds);

      if (currentSections.length === 0 || isLockedRef.current) {
        return false;
      }

      const nextIndex = clamp(index, 0, currentSections.length - 1);
      const targetSection = currentSections[nextIndex];

      if (!targetSection) {
        return false;
      }

      isLockedRef.current = true;
      activeIndexRef.current = nextIndex;
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      clearLockTimeout();
      lockTimeoutRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
        lockTimeoutRef.current = null;
      }, NAVIGATION_LOCK_MS);

      return true;
    };

    const navigateBy = (direction: 1 | -1) => {
      const currentSections = getSections(sectionIds);

      if (currentSections.length === 0) {
        return false;
      }

      const currentIndex = getNearestSectionIndex(currentSections);
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= currentSections.length) {
        return false;
      }

      return navigateTo(nextIndex);
    };

    const handleWheel = (event: WheelEvent) => {
      const isTouchOrCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

      if (
        isTouchOrCoarsePointer ||
        event.defaultPrevented ||
        Math.abs(event.deltaY) < MIN_WHEEL_DELTA ||
        isInteractiveElement(event.target) ||
        (event.target instanceof Element && canScrollInDirection(event.target, event.deltaY))
      ) {
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

      const currentSections = getSections(sectionIds);
      let didNavigate = false;

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        didNavigate = navigateBy(1);
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        didNavigate = navigateBy(-1);
      }

      if (event.key === 'Home') {
        didNavigate = navigateTo(0);
      }

      if (event.key === 'End') {
        didNavigate = navigateTo(currentSections.length - 1);
      }

      if (didNavigate) {
        event.preventDefault();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = sectionIds.indexOf(visibleEntry.target.id);

        if (nextIndex >= 0) {
          activeIndexRef.current = nextIndex;
        }
      },
      { rootMargin: '-18% 0px -45% 0px', threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearLockTimeout();
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sectionIds]);
}
