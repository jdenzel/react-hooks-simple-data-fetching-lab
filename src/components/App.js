import React, { useState, useEffect } from "react";

function App()  {
    const [dogPic, setDogPic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogPic(data.message);
            console.log(data.message)
            setIsLoaded(true);
          });
    }, []);

    if (!isLoaded) return <p>Loading...</p>

    return(
        <img alt="A Random Dog" src={dogPic}/>
    )
}

export default App;