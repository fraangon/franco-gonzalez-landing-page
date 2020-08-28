import Projects from "../components/projects/projects";
import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Footer from "../components/footer/footer/footer";

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