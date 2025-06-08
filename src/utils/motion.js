export const textVariant = (delay = 0) => ({
  hidden: {
    y: 10, // subtle downward offset
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4, // smooth but quick
      delay,
      ease: "easeOut",
    },
  },
});

export const fadeIn = (direction, type = "tween", delay = 0, duration = 0.4) => ({
  hidden: {
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.3) => ({
  hidden: {
    scale: 0.8, // avoid popping from 0
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type = "tween", delay = 0, duration = 0.5) => ({
  hidden: {
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

