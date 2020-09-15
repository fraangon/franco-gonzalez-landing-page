import dynamic from 'next/dynamic'
import NavBar from '../components/navbar/navbar';

const Contact = dynamic( 
    () => import('../components/contact/contact'),
    { ssr: false } 
);


export default function Main(props) {
    return ( 
        <div>
            <Contact/>
            <NavBar selected='CONTACT'/>
        </div> 
    )
}
