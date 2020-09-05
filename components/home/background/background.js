import styles from './background.module.css'
import ParallaxMousemove from 'react-parallax-mousemove'

export default function Background() {
    
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
                <img className={styles.shadow} src="/background_parallax/bg.png" alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.05,
                yFactor: -0.03,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <img className={styles.img_style} src='/background_parallax/layer_3.png' alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.10,
                yFactor: -0.06,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <img className={styles.img_style} src='/background_parallax/layer_2.png' alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                xFactor: 0.15,
                yFactor: -0.09,
                springSettings: {
                    stiffness: 150,
                    damping: 50
                }
                }}>
                <img className={styles.img_style} src='/background_parallax/layer_1.png' alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>

            </ParallaxMousemove>
      </div>
      </div>)
    
}