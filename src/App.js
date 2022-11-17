import "./styles/normalize.css";
import './App.css';


import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import GaleriaPage from "./pages/GaleriaPage";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";


function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>}>Home</Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/servicios" element={<Servicios/>}></Route>
        <Route path="/galeria" element={<GaleriaPage/>}></Route>
        <Route path="/contacto" element={<ContactoPage/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
