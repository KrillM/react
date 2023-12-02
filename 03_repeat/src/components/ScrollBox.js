import { useRef } from "react";

function ScrollBox() {
    const box = useRef();
    const gotothetop = () => {
        box.current.scrollTop = 0;
    }

    return(
        <>
            <div className="scroll-box" ref={box}>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
            <button onClick={gotothetop}>TOP</button>
        </>
    )
}

export default ScrollBox;