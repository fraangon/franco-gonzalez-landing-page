import styles from './projects_items.module.css'
import dynamic from 'next/dynamic'
//import Carrusel from '../carrusel/carrusel';



const Carrusel = dynamic(
  () => import('../carrusel/carrusel').then((mod) => mod.Carrusel),
  { ssr: false }
);



/*
const Rail = dynamic(
  () => import('../rail/rail').then((mod) => mod.Rail),
  { ssr: false }
)
*/


export default function ProjectsItems() {
    
    return ( 
        <div> 

          <Carrusel></Carrusel>

        </div>
    );
  }
  //<Rail></Rail>