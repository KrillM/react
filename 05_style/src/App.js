import { useState } from 'react';
import './App.css';
// import OriginCss from './components/OriginCss';
// import ModuleCss from './components/ModuleCss';
// import SassComponent from './components/SassComponent';
// import StyledComponent from './components/StyledComponent';
// import UseMemoEx from './hooks/UseMemoEx';
import Silsup02 from './practice/Silsup03';
// import UseCallbackEx from './hooks/UseCallbackEx';
// import UseCallbackEx2 from './hooks/UseCallbackEx2';
// import UseReducer from './hooks/UseReducer';/
// import CustomHookEx from './hooks/CustomHookEx';
// import Haedap02 from './practice/Haedap02';

function App() {
  // const [postId, setPostId] = useState(1);
  return (
    <>
      {/* <OriginCss />
      <br/>
      <ModuleCss /> */}

      {/* <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button> */}

      {/* <UseMemoEx /> */}
      <Silsup02 />
    </>
  );
}

export default App;
