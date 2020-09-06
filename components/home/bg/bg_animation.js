const easing = [0.6, -0.05, 0.01, 0.99];

const animationBG = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: easing
      }
    },
    exit: { 
      opacity: 1
    }
  }

export {animationBG, easing}