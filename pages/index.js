import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Home from '../components/home/home/home'
import { motion } from 'framer-motion';
import BgScroll from '../components/home/bg/bg';
import Bg from '../components/home/bg/bg';

export default function Main() {
  return ( 
    <div >
      <NavBar selected='HOME' />
      <Layout>
        <section>
          <Home/>  
        </section>
      </Layout>
      <Bg/> 
    </div>
    )
  }
  /*

  */