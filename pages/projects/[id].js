import NavBar from '../../components/navbar/navbar'
import ProjectPage from '../../components/projectPage/projectPage'
import Layout, { siteTitle } from '../../components/layout/layout'
import {posts} from '../../posts/posts.js'


export default function Project(props) {
    return ( 
        <div>
            <NavBar selected='PROJECTS'/>
            <ProjectPage dataProject = {props.dataProject} />
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
