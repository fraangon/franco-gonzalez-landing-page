import styles from './motion_animation.module.css';
import {useState} from 'react';

export default function MotionAnimation() {

    const [ playAnimation, setPlayAnimation ] = useState(false);
    const [ playAgainAnimation, setPlayAgainAnimation ] = useState(false);

    const defaultStyle = styles.motion_animation;
    const animationStyle1 = styles.motion_animation_play;
    const animationStyle2 = styles.motion_animation_play_again;
    
    function playAnimationOneTime() {
        setPlayAnimation(true);
        setPlayAgainAnimation(!playAgainAnimation);
    }

    function getStyle() {
        return playAnimation? getStyleAgain() : defaultStyle;
    }

    function getStyleAgain() {
        if(playAgainAnimation){
            return animationStyle1;
        } else {
            return animationStyle2;
        }
    }

    return (
        <div 

        onClick={ () => playAnimationOneTime() } 
        className={ getStyle() }

        ></div>
    )
}
