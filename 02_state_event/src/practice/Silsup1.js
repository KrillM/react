import {useState} from 'react'

const Silsup1 = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber((prevNumber) => prevNumber + 1);
    }

    const decrease = () => {
        setNumber((prevNumber) => prevNumber - 2);
    }

    return (
        <>
        <h3>Silsup1</h3>
        <div>
          number state value {number}{" "}
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-2</button>
        </div>
      </>
    );
}

export default Silsup1;