import './App.css';
import FunComponent from './components/FunComponent';
import FunProps from './components/FunProps';
import ClassComponent from './components/ClassComponent';
import Sector from './components/Sector';
import ClassProps from './components/ClassProps';

function App() {
  return (
    <div>
      {/* <ClassComponent />
      <FunComponent /> */}
      {/* <FunComponent></FunComponent> */}

      {/* 숫자를 넘겨줄 시 {}로 감싸준다. */}
      {/* <FunProps title="SeSAC" content="Hello World" number={1+1} />
      <FunProps content="Hello World" number={1+1} /> */}
      {/* <FunProps title="SeSAC" number={1+1} /> */}

      <Sector title="SeSAC">
        <div>SeSAC's content</div>
      </Sector>
      <Sector title="CodingOn">
        <p>CodingOn's content</p>
      </Sector>

      <ClassProps title="SeSAC" content="Hello World" number={1+1} />
      <ClassProps content="Hello World" number={1+1} />
    </div>
  );
}

export default App;
