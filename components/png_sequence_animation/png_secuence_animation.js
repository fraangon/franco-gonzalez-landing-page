import {useState} from 'react';

export default function PngSecuenceAnimation(props) {
    
    const [ playAnimation, setPlayAnimation ] = useState(false);
    const [ playAgainAnimation, setPlayAgainAnimation ] = useState(false);

    const defaultStyle = props.styles.animation;
    const animationStyle1 = props.styles.animation_play;
    const animationStyle2 = props.styles.animation_play_again;
    
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