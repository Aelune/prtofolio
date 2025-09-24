import { Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 12 }
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
};

export const textVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.8 }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 }
  },
};

export const tagVariants = (index: number): Variants => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 + index * 0.1, duration: 0.4 }
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
});

export const imageVariants: Variants = {
  initial: { opacity: 0, scale: 0.9, rotate: -6 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 0.3, duration: 0.8 }
  },
  exit: { opacity: 0, scale: 0.8, rotate: 6, transition: { duration: 0.4 } },
};
