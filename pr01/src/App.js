import './App.css';
import Calculate from './components/Calculate';
import Food from './components/Food';
import ClassProps from './components/ClassProps';
import Card from './components/Card';

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
    
    // <Calculate />
    // <Food />
    
   // <ClassProps valid="콘솔 띄우기 성공"/>
   <Card title="맨하튼 프로젝트" author="줄리어스 로버트 오펜하이머" price="20,000원" type="물리화학"/>
  );
}

export default App;
