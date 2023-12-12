import { useDispatch, useSelector } from "react-redux";
import { inputCash, outputCash } from "./modules/counterReducer";
import { react, useState } from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const cash = useSelector((state) => state.counter.cash);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputValue(Number(e.target.value))
  }

  return (<>
    <h1>코딩온 은행</h1>
    <h3>통장금액: {cash}원</h3>
    <form>
      <input type="number" value={inputValue} onChange={handleInput} />

      <button type="button" onClick={() => dispatch(inputCash(inputValue))}>입금</button>
      <button type="button" onClick={() => dispatch(outputCash(inputValue))}>출금</button>
    </form>
  </>);
}

export default App;
