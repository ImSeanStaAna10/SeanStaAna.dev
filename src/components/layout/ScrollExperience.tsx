import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelector = [
  '.section-heading > div',
  '.section-heading > p',
  '.section-heading > .text-link',
  '.featured-project',
  '.about-grid > div',
  '.journey-details',
  '.skills-legend',
  '.skill-group',
  '.experience-intro',
  '.experience-item',
  '.repo-card',
  '.certificate-row',
  '.cv-strip',
  '.contact-copy',
  '.contact-form-panel',
  '.detail-heading',
  '.detail-preview',
  '.detail-actions',
  '.detail-sections > section',
].join(', ');

export function ScrollExperience() {
  const { pathname } = useLocation();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (progressRef.current) progressRef.current.style.transform = 'scaleX(' + progress + ')';
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const sizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
    sizeObserver?.observe(document.body);
    schedule();

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      sizeObserver?.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | null = null;
    let mutations: MutationObserver | null = null;
    const animations = new Map<HTMLElement, Animation>();
    let generation = 0;
    const hasFocus = (element: HTMLElement, focused: Element | null) => !!focused &&
      (element.contains(focused) || (
        focused !== main && focused !== document.body &&
        focused !== document.documentElement && focused.contains(element)
      ));

    const stop = () => {
      generation += 1;
      observer?.disconnect();
      mutations?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };

    const reveal = () => {
      stop();
      if (preference.matches || typeof IntersectionObserver !== 'function') return;
      const seen = new WeakSet<HTMLElement>();

      const activeGeneration = generation;
      observer = new IntersectionObserver(entries => {
        if (preference.matches || activeGeneration !== generation) return;
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer?.unobserve(element);
          if (hasFocus(element, document.activeElement) || typeof element.animate !== 'function') return;

          const parent = element.parentElement;
          const index = parent?.matches('.skills-grid, .repo-grid, .experience-list')
            ? Array.from(parent.children).indexOf(element) % 3
            : 0;
          const animation = element.animate(
            [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }],
            { duration: 600, delay: index * 70, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' },
          );
          animations.set(element, animation);
          const forget = () => {
            if (animations.get(element) === animation) animations.delete(element);
          };
          animation.onfinish = forget;
          animation.oncancel = forget;
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      const register = (root: Element) => {
        const elements = [
          ...(root.matches(revealSelector) ? [root] : []),
          ...Array.from(root.querySelectorAll(revealSelector)),
        ];
        elements.forEach(element => {
          if (!(element instanceof HTMLElement) || seen.has(element)) return;
          seen.add(element);
          observer?.observe(element);
        });
      };

      register(main);
      mutations = new MutationObserver(records => {
        records.forEach(record => record.addedNodes.forEach(node => {
          if (node instanceof Element) register(node);
        }));
      });
      mutations.observe(main, { childList: true, subtree: true });
    };

    const keepFocusVisible = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const focused = event.target;
      animations.forEach((animation, element) => {
        if (hasFocus(element, focused)) animation.cancel();
      });
    };

    reveal();
    preference.addEventListener('change', reveal);
    main.addEventListener('focusin', keepFocusVisible);
    return () => {
      stop();
      preference.removeEventListener('change', reveal);
      main.removeEventListener('focusin', keepFocusVisible);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>;
}