import Projects from "../components/projects/projects/projects";
import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Footer from "../components/footer/footer/footer";
import BgScroll from "../components/home/bg_scroll/bg_scroll";

export default function Main() {
    return ( 
      <div>
      <NavBar selected='PROJECTS'/>
      <Layout>
          <Projects/>  
          <Footer/>
      </Layout>
    </div>
      )
  }
