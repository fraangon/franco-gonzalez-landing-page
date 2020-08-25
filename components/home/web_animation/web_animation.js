import styles from './web_animation.module.css';
import {useState} from 'react';

export default function WebAnimation() {
    
    const [ playAnimation, setPlayAnimation ] = useState(false);
    const [ playAgainAnimation, setPlayAgainAnimation ] = useState(false);

    const defaultStyle = styles.web_animation;
    const animationStyle1 = styles.web_animation_play;
    const animationStyle2 = styles.web_animation_play_again;
    
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