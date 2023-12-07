import { useState } from 'react';
import './App.css';
// import OriginCss from './components/OriginCss';
// import ModuleCss from './components/ModuleCss';
// import SassComponent from './components/SassComponent';
// import StyledComponent from './components/StyledComponent';
// import UseMemoEx from './hooks/UseMemoEx';
// import UseCallbackEx from './hooks/UseCallbackEx';
// import UseCallbackEx2 from './hooks/UseCallbackEx2';
// import UseReducer from './hooks/UseReducer';/
import CustomHookEx from './hooks/CustomHookEx';

function App() {
  // const [postId, setPostId] = useState(1);
  return (
    <>
      {/* <OriginCss />
      <br/>
      <ModuleCss /> */}

      {/* <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button> */}

      <CustomHookEx />
    </>
  );
}

export default App;
