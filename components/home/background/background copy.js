import styles from './background.module.css'
import ParallaxMousemove from 'react-parallax-mousemove'
import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );



export default function BackgroundCpy() {

    const [ssrDone, setSsrDone ] = useState(false);
    
    useEffect(() => {
        setSsrDone(true)
        }, [])
    
    const widthBg = getWindowHeight() * ( 7680/4320 )
    const heightBg = getWindowHeight()
    
    const style = {
        outter: {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width:'100%',
            position: 'relative',
            overflow: 'hidden',
            marginLeft: 'auto',
            marginRigth: 'auto'
          },
          infoLayerStyle: {
            position: 'relative',

          },
          bgLayerStyle: {
            position: 'absolute',
            height: '100%',
          }
      }
  
      return (<div >
        <div >
            <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: -0.03,
                yFactor: 0.03,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                 <Frame
                    height={ heightBg } 
                    width={ widthBg } 
                    top={0} 
                    left={ (getWindowWidth() - widthBg) / 2 } 
                    image='/background_parallax/shadow.png'
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        mixBlendMode: "multiply"
                    }}
                />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.05,
                yFactor: -0.03,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <Frame
                    height={getWindowHeight()} 
                    width={ getWindowHeight() * ( 7680/4320 ) } 
                    top={0}
                    left={ (getWindowWidth() - widthBg) / 2 } 
                    image='/background_parallax/layer_3.png'
                    style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }}
                />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.10,
                yFactor: -0.06,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <Frame
                    height={getWindowHeight()} 
                    width={ getWindowHeight() * ( 7680/4320 ) } 
                    top={0}
                    left={ (getWindowWidth() - widthBg) / 2 } 
                    image='/background_parallax/layer_2.png'
                    style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }}
                />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.15,
                yFactor: -0.09,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <Frame
                    height={getWindowHeight()} 
                    width={ getWindowHeight() * ( 7680/4320 ) } 
                    top={0}
                    left={ (getWindowWidth() - widthBg) / 2 } 
                    image='/background_parallax/layer_1.png'
                    style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }}
                />
            </ParallaxMousemove.Layer>

            </ParallaxMousemove>
      </div>
      </div>)
    
}

