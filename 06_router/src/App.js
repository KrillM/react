import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import Products from './pages/Products';
import ErrorMeg404 from './pages/ErrorMsg404';
import Details from './pages/Details';
import Album from './pages/Album';
import Sajin from './pages/Sajin';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* Routes, Route를 감싸야 한다. */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/product/:id" element={<Details />}/>
            <Route path="/photos" element={<Album />}/>
            <Route path="/photo/:id" element={<Sajin />}/>
            {/* 별표는 맨 나중에 작성한다. */}
            <Route path="*" element={<ErrorMeg404 />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
