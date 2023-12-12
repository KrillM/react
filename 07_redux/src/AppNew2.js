import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./modules/counterReducer";
import "./App.css";

function AppNew2() {
    return (
        <>
            <Box1 />
        </>
    );
}

function Box1() {
    const number = useSelector((state) => state.counter.number);
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
    const number = useSelector((state) => state.counter.number);
    const isData = useSelector((state) => state.isData);
    const dispatch = useDispatch();

    return (
        <div className="box">
            <h3>number: {number}</h3>
            {/* <button onClick={()=>dispatch({type: 'increment'})}>+</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>-</button> */}

            <button onClick={() => dispatch(increase())}> + </button>
            <button onClick={() => dispatch(decrease())}> - </button>
            
            <div>isData: {`${isData}`}</div>
            <button onClick={()=>dispatch({type: 'change'})}>change</button>
        </div>
    );
}

export default AppNew2;