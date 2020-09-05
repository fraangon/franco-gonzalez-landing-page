const easing = [0.6, -0.05, 0.01, 0.99];

const animationName = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationMotion = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.2,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationWeb = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.4,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationBG = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easing
    }
  },
  exit: { 
    scale: 0.95,
    opacity: 0
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export {easing, animationName, animationMotion, animationWeb, animationBG, stagger}