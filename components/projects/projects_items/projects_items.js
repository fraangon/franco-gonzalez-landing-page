import styles from './projects_items.module.css'
import dynamic from 'next/dynamic'
import {posts} from '../../../posts/posts.js'
import { useState, useEffect } from "react";
import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';

const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );
const Stack = dynamic( () => import('framer').then((mod) => mod.Stack), { ssr: false } );
const Page = dynamic( () => import('framer').then((mod) => mod.Page), { ssr: false } );


export default function ProjectsItems() { 
  
  const [ssrDone, setSsrDone ] = useState(false);
    
  useEffect(() => {
      setSsrDone(true)
      }, [])

  if(ssrDone) {
      
    return ( <div>
        <Frame
          name={"Mask"}
          overflow={"hidden"}
          height= '50vh'
          width= {Math.min( getWindowWidth(), 1920 ) - 200}
          x={-100}
          backgroundColor='#200a48'
        >

          <Stack 
            size={100} 
            direction="horizontal" 
            alignment="start" 
            gap='40' 
            distribution="start"  
            x={-100}
          >

            {posts.map(aPost => ( 
              <Frame key={aPost.title} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
                
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
          x={Math.min( getWindowWidth(), 1920 ) -340}
          y='-2.5vh'
          style={{
            filter: 'blur(15px)',
          }}
        />
        
        
        </div>);


  } 
  return (<div> Loading... </div>)
  
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