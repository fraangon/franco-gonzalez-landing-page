import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';

export default function Rail() {
    <Frame 
        name={'Rail'}
        width={ Math.min( getWindowWidth(), 1920 ) - 400 }
        height={'1vh'}
        radius={0}
        position={"relative"}
        left={'0px'}
        background={"rgba(255,255,255,.1)"}
        top={'55vh'}
    >
        <Frame
            name={'Knob'}
            width={'8%'}
            height={'1vh'}
            radius={0}
            position={"relative"}
            left={'0%'}
            background={"rgba(255,255,255,.1)"}
            drag={"x"}
            dragConstraints={{ 
            left: 0, 
            right:  (Math.min( getWindowWidth(), 1920 ) - 400) * 0.92
            }}
            dragElastic={0}
            dragMomentum={false}
            x={position}
        ></Frame>
    </Frame>
}

/*

*/