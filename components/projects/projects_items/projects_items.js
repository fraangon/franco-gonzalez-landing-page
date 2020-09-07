import styles from './projects_items.module.css'
import dynamic from 'next/dynamic'
import {posts} from '../../../posts/posts.js'
import { useState, useEffect } from "react";
import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';
import { Frame, Stack, useMotionValue, useTransform } from "framer";

// TBR: No necesito importar dinamicamente.
//const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );
//const Stack = dynamic( () => import('framer').then((mod) => mod.Stack), { ssr: false } );
//const useMotionValue = dynamic( () => import('framer').then((mod) => mod.useMotionValue), { ssr: false } );


export default function ProjectsItems() { 
  
  const [ssrDone, setSsrDone ] = useState(false);
  const position = useMotionValue(0);
  let i = 1;

  useEffect(() => {
    setSsrDone(true)
  }, [])
  
  // width consts
  const widthLayer = Math.min( getWindowWidth(), 1920 )
  const widthItem = ( 40 * 0.01 * getWindowHeight() );
  const widthItemAndGap = widthItem + 40;
  const lengthItems = posts.length;
  const widthSliderTotal = ( (lengthItems-1) * widthItemAndGap + widthItem)
  const widthSlider = (widthLayer - 400) * 0.92;
  
  // slider controller
  const [xOffset, setXOffset] = React.useState(100);
  
  const itemsPosition = useTransform( position, [0, widthSlider], [100, 100 - (widthSliderTotal - (widthLayer-400))]);

  return ( 
    <div>
        <Frame
          name={"Mask"}
          overflow={"hidden"}
          height= '50vh'
          width= {widthLayer - 200}
          x={-100}
          backgroundColor='#200a48'
        >

          <Stack 
            size={100} 
            direction="horizontal" 
            alignment="start" 
            gap='40' 
            distribution="start"  
            x={ xOffset }
          >

            {posts.map(aPost => ( 
              <Frame key={i++} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
                
                <div className={styles.project_item_text}>
                <h3>{aPost.title}</h3>
                <h4>{aPost.type}</h4>
                </div>

                <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

            </Frame>
            ))}

          </Stack>
        </Frame>

        <Frame
          name={"Mask Izq"}
          width= {120}
          backgroundColor='#200a48'
          height= '55vh'
          x={-180}
          y='-2.5vh'
          style={{
            filter: 'blur(15px)',
          }}
        />

        <Frame
          name={"Mask Der"}
          width= {120}
          backgroundColor='#200a48'
          height= '55vh'
          x={ widthLayer - 340 }
          y='-2.5vh'
          style={{
            filter: 'blur(15px)',
          }}
        />
        
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
                onDrag={ function() {
                  setXOffset( 
                   (itemsPosition.get())  
                  );
                }}
            ></Frame>
        </Frame>
        

    </div>
  );


  
  
}

/*
{items.map(aItem => (
        
        <Frame key={aItem.name} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
        
            
            <div className={styles.project_item_text}>
            <h3>{aItem.name}</h3>
            <h4>{aItem.type}</h4>
            </div>

            <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

        </Frame>
            
        ))}

*/