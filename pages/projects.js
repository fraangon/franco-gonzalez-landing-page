import Projects from "../components/projects/projects/projects";
import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Footer from "../components/footer/footer/footer";
import Bg from "../components/home/bg/bg";

export default function Main() {
  return ( 
    <div>
      <NavBar selected='PROJECTS'/>
      <Layout>
        <section>
            <Projects/>
        </section>
      </Layout>
      <Bg></Bg>
    </div> 
  )
}
