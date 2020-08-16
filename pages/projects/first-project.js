import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout/layout';

export default function FirsProject() {
    return (
        <Layout>
            <Head>
                <title>A Project</title>
           </Head>

            <h1> This would be a project page.</h1>
            
            <h2>
                <Link href="/" >
                    <a> Back to home </a>
                </Link>
            </h2>
        </Layout>
    )
}