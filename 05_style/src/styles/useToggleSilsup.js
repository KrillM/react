import { useEffect, useState } from "react";

export default function useToggleSilsup() {
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

    return { width, height };
}