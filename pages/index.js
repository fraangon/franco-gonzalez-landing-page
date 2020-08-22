import Head from 'next/head'
import NavBar from '../components/navbar/navbar'
import Layout, { siteTitle } from '../components/layout/layout'
import Home from '../components/home/home'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'


export default function Main() {
  return ( 
    <div>
      <NavBar selected='HOME'/>
      <Layout>
        <section>
          <Home/>  
        </section>
      </Layout>
    </div>
    )
}