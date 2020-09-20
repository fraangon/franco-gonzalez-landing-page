# Franco Gonzalez - Landing Page

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/francogonzalezorellano/franco-gonzalez-landing-page.git
```

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀


## Prototype:

https://xd.adobe.com/view/6050f04c-5084-4ea1-97cf-611402c9d291-3503/

## To solve 'window is not defined' 

```
const AComponent = dynamic( () => import('/path').then((mod) => mod.AComponent), { ssr: false } );
```

or

```
import { useState, useEffect } from "react";

export default function AComponent() {
    
    const [ssrDone, setSsrDone ] = useState(false);
    
    useEffect(() => {
        setSsrDone(true)
        }, [])

    if(ssrDone) {
        return( <div> Component content </div> )
    } 
    return (<div> Loading... </div>)

};
```

## Use of PngSequenceAnimation component

```
import aStyle from './a_style.module.css'

<PngSecuenceAnimation styles={aStyle} />

```

And in the .module.css file:

```
.animation{
    width: 1027px;  // A frame width
    height: 60px;   // A frame height
    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat; // The path to the frame sheet
}

.animation:hover{ // 'On hover' style
    opacity: 85%;
}

.animation_play{
    width: 1027px; // A frame width
    height: 60px;  // A frame height
    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;  // The path to the frame sheet
    animation: play_animation 2s steps(60) normal; // Time duration and number of frames
}

@keyframes play_animation {
    100% { background-position: 0 -3600px; } // A frame width/height * number of frames 
}

.animation_play:hover{ // The same 'On hover' style
    opacity: 85%;
}

.animation_play_again{
    width: 1027px;   // A frame width
    height: 60px;   // A frame height
    background: transparent url('/animations/motion_animation.png') 0 0 no-repeat;   // The path to the frame sheet
    animation: play_animation_again 2s steps(60) normal; // Time duration and number of frames
}


@keyframes play_animation_again {
    100% { background-position: 0 -3600px; } // A frame width/height * number of frames 
}

.animation_play_again:hover{ // The same 'On hover' style
    opacity: 85%;
}
```