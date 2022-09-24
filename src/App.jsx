import React from "react";

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
        </>
    )
}

export default App;