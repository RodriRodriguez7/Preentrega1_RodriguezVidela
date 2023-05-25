import React from "react";
import "./styles.js"
import NavBar from "./Components/NavBar/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";



const App = () => {
  return (
    <div className="App">
      <NavBar color="black"/>
      <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
 };


export default App;