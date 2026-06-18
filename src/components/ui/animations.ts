'use client';

import { type Variants, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Shared Framer Motion animation variants for the Ama a Dios design system.
 * All animations respect prefers-reduced-motion.
 */

export function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  const shouldAnimate = !prefersReduced;
  return { shouldAnimate, prefersReduced };
}

/** Fade in + slide up — standard entrance for most elements */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.1, 1.0] },
  },
};

/** Fade in only — for subtle appearances */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/** Scale in — for modal/dialog entrance */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.1, 1.0] },
  },
};

/** Stagger container — children stagger in sequence */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Slide in from left — for sidebar / nav */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.1, 1.0] },
  },
};

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.1, 1.0] },
  },
};

/** Card hover — gentle lift and shadow elevation */
export const cardHover = {
  whileHover: { scale: 1.02, y: -4 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
};

/** Button hover — subtle lift */
export const buttonHover = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 12 },
};

/** Prayer pulse — gentle heartbeat loop */
export const prayerPulse = {
  animate: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
  whileHover: {
    scale: 1.06,
    transition: { duration: 0.2 },
  },
  whileTap: { scale: 0.95 },
};

/** Timeline stage dot — active state ripple */
export const timelineDot: Variants = {
  future: {
    scale: 1,
    backgroundColor: 'var(--color-neutral-200)',
  },
  active: {
    scale: [1, 1.3, 1],
    backgroundColor: 'var(--color-primary)',
    transition: {
      scale: { duration: 0.6, ease: 'easeInOut' },
      backgroundColor: { duration: 0.3 },
    },
  },
  completed: {
    scale: 1,
    backgroundColor: 'var(--color-primary)',
  },
};

/** Filter pill layout animation */
export const filterPillLayout = {
  layout: true,
  layoutId: 'active-filter',
};

/** Share card generated state */
export const shareCardReveal: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.1, 1.0] },
  },
};

/**
 * Helper for scroll-triggered animations.
 * Usage: <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} />
 */
export const viewportOptions = { once: true, margin: '-80px' } as const;

/**
 * Get safe variants that respect reduced motion.
 * Pass the result from useMotionSafe() and the variants you want.
 */
export function useSafeVariants<T extends Variants>(variants: T): T {
  const { shouldAnimate } = useMotionSafe();

  return useMemo(() => {
    if (shouldAnimate) return variants;
    return {
      hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
      visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    } as unknown as T;
  }, [shouldAnimate, variants]);
}
