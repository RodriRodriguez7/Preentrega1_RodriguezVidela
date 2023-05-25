import React from "react"
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = ({ color }) => {

return(
    <nav style={{ backgroundColor: color }}>
        <ul
        style={{
            display:"flex",
            height:"100px",
            color:"white",
            justifyContent:"space-around",
            alignItems:"center",
        }}
        >
        <li style={{ listStyle:"none"}} >
        <a href="www.google.com" style={{textDecoration: "none", color:"white"}}> Inicio</a>
            </li>
        <li style={{ listStyle:"none"}} >
        <a href="www.google.com" style={{textDecoration: "none", color:"white"}}> Productos</a>
            </li>
        <li style={{ listStyle:"none"}} >
        <a href="www.google.com" style={{textDecoration: "none", color:"white"}}> Nosotros</a>
            </li>
        <li style={{ listStyle:"none"}} >
        <a href="www.google.com" style={{textDecoration: "none", color:"white"}}> Contacto</a>
            </li>
            <CartWidget/>
        </ul>
    </nav>
)
};

export default NavBar;