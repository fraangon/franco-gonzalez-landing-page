import dynamic from 'next/dynamic'
import BgScroll from '../components/home/bg_scroll/bg_scroll'
import Home from '../components/home/home/home'
import Layout from '../components/layout/layout'

export default function Main() {
    return ( 
        <div>
            <Layout>
                <section>
                    <Home></Home>
                </section>
            </Layout>
            <BgScroll></BgScroll>
        </div>
    )
}
/*

*/