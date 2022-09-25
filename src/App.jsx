import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    const onClick = () => {
        alert("Hello World");
    };
    const contentStyle = {
        color: "blue",
        fontSize: "18px"
    };
    const [num, setNume] = useState(0);
                        
    const [faceShowFlag, 
        setFaceShowFlag] = useState(false);
    const switchFaceShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    }
    useEffect(() => {
        console.log("useEffect");
    });

    if(num > 0 ) {
        if (num % 3 === 0) {
            faceShowFlag || setFaceShowFlag(true);
        } else {
            faceShowFlag && setFaceShowFlag(false);
        }
    }

    return (
        <>
        <h1 style={contentStyle}>Hello World</h1>
        <button onClick={onClick}>Click me </button>
        <ColorfulMessage color="blue">How are you?</ColorfulMessage>
        <ColorfulMessage color="pink">Good morning!</ColorfulMessage>
        <p>{num}</p>
        <button onClick={() => setNume(num + 1)}>Count up</button>
        { faceShowFlag && <p>😇</p>}
        <button onClick={switchFaceShowFlag}>on/off</button>
        </>
    )
}

export default App;