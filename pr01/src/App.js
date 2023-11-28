import './App.css';
import Calculate from './components/Calculate';

const name = "몽이";
const animal = "강이지";

function App() {
  return (
    // <div>
    //     <h2>
    //       제 반려동물의 이름은 {name}입니다.
    //       {name}는 {animal}입니다.
    //     </h2> 
    // </div>
    
    <Calculate />
  );
}

export default App;
