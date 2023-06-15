import React from "react";
import "./styles.js"
import NavBar from "./Components/NavBar/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//Views
import HomePage from "./Components/Pages/HomePage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import ContactPage from "./Components/Pages/ContactPage.jsx";
import ProductosPage from "./Components/Pages/ProductosPage.jsx"
import ErrorPage from "./Components/Pages/ErrorPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar color="black"/>
        <ItemListContainer greeting="Bienvenidos"/>
      </div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Productos" element={<ProductosPage />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path="/Contact" element={<ContactPage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </Router>
  );
 };


export default App;