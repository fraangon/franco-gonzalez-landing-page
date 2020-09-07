import { Frame, useMotionValue } from "framer";
import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';

// width consts
const widthLayer = Math.min( getWindowWidth(), 1920 )
const widthItem = ( 40 * 0.01 * getWindowHeight() );
const widthItemAndGap = widthItem + 40;
const lengthItems = posts.length;
const widthSliderTotal = ( (lengthItems-1) * widthItemAndGap + widthItem)

export default function Slider() { 
    const position = useMotionValue(0);
    
    return <h1>HOLA</h1>

    return (
    
        <Frame 
            name={'Rail'}
            width={ widthLayer - 400 }
            height={'1.6vh'}
            radius={0}
            position={"relative"}
            left={'0px'}
            background={"rgba(255,255,255,.1)"}
            top={'55vh'}
        >
            <Frame
                name={'Knob'}
                width={'8%'}
                height={'1.6vh'}
                radius={0}
                position={"relative"}
                left={'0%'}
                background={"rgba(255,255,255,.1)"}
                drag={"x"}
                dragConstraints={{ 
                left: 0, 
                right:  (widthLayer - 400) * 0.92
                }}
                dragElastic={0}
                dragMomentum={false}
                x={position}
            ></Frame>
        </Frame>

    )
}