import { useEffect, useState } from "react";

export default function Silsup03 () {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 


    return(
        <>
            <h1>너비 : {width}</h1>
            <h1>높이 : {height}</h1>
        </>
    )
}
