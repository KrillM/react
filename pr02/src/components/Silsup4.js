import { useState } from "react";

const Silsup4 = () => {
    const [msg, setMsg] = useState("hello");
    const [textColor, setTextColor] = useState("black");


    const redColor = (e) => {
      setTextColor("red");
    }

    const blueColor = () => {
      setTextColor("blue");
    }

    return (
        <>
        <h1 style={{ color: textColor }}>{msg}</h1>
        <div>
            <button onClick={redColor}>빨간색</button>
            <button onClick={blueColor}>파란색</button>
        </div>
        </>
    );    
}

export default Silsup4;