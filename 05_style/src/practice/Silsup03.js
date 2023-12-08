import useToggleSilsup from "../styles/useToggleSilsup";

export default function Silsup03 () {
    const { width, height } = useToggleSilsup();

    return(
        <>
            <h1>너비 : {width}</h1>
            <h1>높이 : {height}</h1>
        </>
    )
}