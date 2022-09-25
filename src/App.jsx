import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    const onClick = () => {
        alert("Hello World");
    };
    const contentStyle = {
        color: "blue",
        fontSize: "18px"
    };
    return (
        <>
        <h1 style={contentStyle}>Hello World</h1>
        <button onClick={onClick}>Click me </button>
        <ColorfulMessage color="blue">How are you?</ColorfulMessage>
        <ColorfulMessage color="pink">Good morning!</ColorfulMessage>
        </>
    )
}

export default App;