import {Frame, Stack, useMotionValue} from 'framer';

const items = [{name:'Name project 1', type: "Type project 1"}
                , {name:'Name project 2', type: "Type project 2"}
                , {name:'Name project 3', type: "Type project 3"}
                , {name:'Name project 4', type: "Type project 4"}
                , {name:'Name project 5', type: "Type project 5"}];

export default function Carrusel() {
    const position = useMotionValue(0);
    
    return(
        <Stack 
            size={100} 
            direction="horizontal" 
            alignment="start" gap='40' 
            distribution="start"  
            x={0}
        >

                {items.map(aItem => (
                
                <Frame key={aItem.name} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
                
                    
                    <div className={styles.project_item_text}>
                    <h3>{aItem.name}</h3>
                    <h4>{aItem.type}</h4>
                    </div>

                    <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

                </Frame>
                    
                ))}

        </Stack>
    );
}

/*

*/