import NavBar from '../../components/navbar/navbar'
import Layout, { siteTitle } from '../../components/layout/layout'
import {posts} from '../../posts/posts.js'
import dynamic from 'next/dynamic'

const ProjectPage = dynamic( 
    () => import('../../components/projectPage/project_page'),
    { ssr: false } 
);


export default function Project(props) {
    return ( 
        <div>
            <ProjectPage dataProject = {props.dataProject} />
            <NavBar selected='PROJECTS'/>
        </div> 
    )
}

export async function getStaticPaths() {
    const paths = getAllIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    return {
        props: {
            dataProject : getDataProjectFromId( params.id )
        }
    }
}

function getAllIds() {
    return posts.map( aPost => {
        return {
            params: {
                id: aPost.title.replace(' ', '_').toLowerCase()
            }
        }
    })
}

function titleToId( aTitle ) {
    return aTitle.replace(' ', '_').toLowerCase()
}

function idIsPost( aId , aPost) {
    return aPost.title.toLowerCase() == aId.replace('_', ' ')
}

function getDataProjectFromId( aId ){
    const fintredPosts =  posts.filter( 
        (aPost) => { return idIsPost(aId, aPost) }
    );

    return fintredPosts[0];
}
