import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import Home from '../components/home/home'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'

export default function Main() {
  return (
    <Layout>
     <section>
        <Home/>
        <About/>
        <Projects/>
        <Footer/>
      </section>

    </Layout>
  )
}