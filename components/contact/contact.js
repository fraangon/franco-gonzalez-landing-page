import { Frame, FramerAnimation } from "framer";
import { getWindowWidth, getWindowHeight } from '../window/window_dimensions.js';
import Link from 'next/link';

export default function Contact() {
    const widthLayer = Math.min( getWindowWidth(), 1920 )
    const heightLayer = getWindowHeight()


    return (
        <Frame
            width={widthLayer} 
            height={heightLayer}
            center 
            background="200a48"
        >
            <div>
                <h4>Contact me</h4>
                <h4>hello@frangon.com.ar</h4>
                <h4>Social</h4>
            </div>
        </Frame>
    )

}

/*
<div>
    {
        
        [logo1.svg, logo2.svg].map(
            (unLogo) => (
                <Link>
                    <img/>
                </Link>
            )
        )
        
    }
</div>
*/