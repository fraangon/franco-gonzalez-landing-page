# Franco Gonzalez - Landing Page

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/francogonzalezorellano/franco-gonzalez-landing-page.git
```

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀


## Prototype:

https://xd.adobe.com/view/6050f04c-5084-4ea1-97cf-611402c9d291-3503/

## To solve 'window is not defined' 

```
const AComponent = dynamic( () => import('/path').then((mod) => mod.AComponent), { ssr: false } );
```

or

```
import { useState, useEffect } from "react";

export default function AComponent() {
    
    const [ssrDone, setSsrDone ] = useState(false);
    
    useEffect(() => {
        setSsrDone(true)
        }, [])

    if(ssrDone) {
        return( <div> Component content </div> )
    } 
    return (<div> Loading... </div>)

};
```

