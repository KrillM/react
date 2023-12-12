import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function AppNew1() {
    return (
        <>
            <Box1 />
        </>
    );
}

function Box1() {
    const number = useSelector((state) => state.number);
    return (
        <div className="box">
            <h3>number: {number}</h3>
            <Box2 />
        </div>
    );
}

function Box2() {
    return (
        <div className="box">
            <Box3 />
        </div>
    );
}

function Box3() {
    return (
        <div className="box">
            <Box4 />
        </div>
    );
}

function Box4() {
    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();
    return (
        <div className="box">
            <h3>number: {number}</h3>
            <button onClick={()=>dispatch({type: 'increment'})}> + </button>
            <button onClick={()=>dispatch({type: 'decrement'})}> - </button>
        </div>
    );
}

export default AppNew1;