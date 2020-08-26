import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Home from '../components/home/home/home'
import { motion } from 'framer-motion';


export default function Main() {
  return ( 
    <motion.div 
      exit={{ 
          opacity: 0
        }}
    >

      <NavBar selected='HOME'/>
      <Layout>
        <section>
          <Home/>  
        </section>
      </Layout>

    </motion.div>
    )
}