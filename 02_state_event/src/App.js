import './App.css';
import StateClass from './components/StateClass';
import StateFun from './components/StateFun';
import EventClass from './components/EventClass';
import EventFun from './components/EventFun';

function App() {
  return (
    <>
      <StateClass name="이름"/>
      <StateFun />
      <EventClass />
      <EventFun />
    </>
  );
}

export default App;
