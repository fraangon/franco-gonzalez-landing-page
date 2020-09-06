const easing = [0.6, -0.05, 0.01, 0.99];

const animationProject = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: 0,
      },
    },
    exit: { 
      opacity: 0
    }
  }

  export {easing, animationProject}