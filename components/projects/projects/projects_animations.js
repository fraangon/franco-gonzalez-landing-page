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

  const projectTitleAnimation = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: 0.1,
      },
    },
    exit: { 
      opacity: 0,
      x: 0,
    }
  }
  const projectSubtitleAnimation = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: 0.2,
      },
    },
    exit: { 
      opacity: 0,
      x: 0,
    }
  }

  export {easing, animationProject, projectTitleAnimation, projectSubtitleAnimation}