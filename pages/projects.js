import Projects from "../components/projects/projects";
import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'

export default function Main() {
    return ( 
      <div>
      <NavBar selected='PROJECTS'/>
      <Layout>
        <section>
          <Projects/>  
        </section>
      </Layout>
    </div>
      )
  }