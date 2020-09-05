const easing = [0.6, -0.05, 0.01, 0.99];

const animationProject = {
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

  export {easing, animationProject}