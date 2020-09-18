const easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
    return (
    {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easing,
                delay: unDelay,
            },
        },
        exit: { 
            opacity: 0,
            y: 0,
        }
    });
}

function animationPage() {
    return {
        initial: {
            opacity: 0
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
            opacity: 0,
        }
    }   
}

export {animationElement, animationPage}