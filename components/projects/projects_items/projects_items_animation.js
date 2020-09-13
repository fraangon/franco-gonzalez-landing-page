const easing = [0.6, -0.05, 0.01, 0.99];

function itemAnimation(aIndex) {
    return (
        {
            initial: {
                y: 60,
                opacity: 0,
            },
            animate: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.9,
                    ease: easing,
                    delay: aIndex * 0.1,
                },
            },
            exit: {
                y: -60,
                opacity: 0,
            },
            whileHover:{
                y: -7,
                scale: 1.05
            },
            whileTap:{
                scale: 1.03
            }
        }
    );
} 

function imgItemAnimation(aIndex) {
    return (
        {
            initial: {
                y: 100,
                scale: 1,
                opacity: 0,
            },
            animate: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: easing,
                    delay: aIndex * 0.1 + 0.05,
                },
            },
            exit: {
                y: 0,
                scale: 1,
                opacity: 0,
            },
        }
    );
} 

function sliderAnimation() {
    return (
        {
            initial: {
                x: -100,
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.9,
                    ease: easing,
                    delay: 0.5,
                },
            },
            exit: {
                x: -100,
                opacity: 0,
            },
        }
    );
} 

export {itemAnimation, imgItemAnimation, sliderAnimation};
