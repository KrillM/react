import { useState } from 'react';
import './App.css';
import LifeFun from './components/LifeFun';
import LifeClass from './components/LifeClass';

function App() {
  const [number, setNumber] = useState(1)
  const [isShow, setIsShow] = useState(true)

  return (
    <>
      <button onClick={() => {setNumber(number + 1)}}>plus</button>{" "}
      {isShow && <button onClick={() => {setIsShow(false)}}>OFF</button>}
      {!isShow && <button onClick={() => {setIsShow(true)}}>ON</button>}
      {isShow && <LifeClass number={number} />}
    </>
  );
}

export default App;
