// #1. AppOld
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppOld from './AppOld';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AppOld />
// );

// #2. AppNew 4 Redux
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppNew from './AppNew';

// // 추가된 부분
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialValue = {number: 100};

// const reducer = (state = initialValue, action) => {
//   switch(action.type) {
//     case 'increment':
//       return {number: state.number + 1};
//     case 'decrement':
//       return {number: state.number - 1};
//     default:
//       return state;
//   }
// }

// const store = configureStore({reducer: reducer}, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppNew />
//   </Provider>
// );

// #3. redux structure
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppNew2 from './AppNew2';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./modules";

const store = configureStore({reducer: rootReducer}, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppNew2 />
  </Provider>
);
