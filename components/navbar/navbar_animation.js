const easing = [0, 0, 0, 0];

const animationName = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0,
    },
  },
  exit: { 
    opacity: 0
  }
}

export {easing, animationName}