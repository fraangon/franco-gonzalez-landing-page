const easing = [0.6, -0.05, 0.01, 0.99];

const animationBG = {
    initial: {
      scale: 1,
      opacity: 1,
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

export {animationBG, easing}