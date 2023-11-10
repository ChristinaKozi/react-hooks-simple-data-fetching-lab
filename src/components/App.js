// create your App component here
import React, { useEffect, useState } from "react";
import { fetch } from "whatwg-fetch";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [dog, setDog] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then((data) => {
            setDog(data)
            setIsLoaded(true)
        })

    },[])

    if (!isLoaded){
        return <p>Loading...</p>
    }

    return (
    <div>
        <img src={dog.message} alt='A Random Dog'></img>
    </div>
)}

export default App;