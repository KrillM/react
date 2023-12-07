import toka from "../styles/useToggle"

export default function CustomHookEx () {
    const [isPopup, togglePopup] = toka(false);

    return(
        <>
            <h2>Custom Hook Study</h2>
            { isPopup && <div>못 맞췄지롱~</div>}
            <button onClick={togglePopup}>탕!</button>
        </>
    )
}