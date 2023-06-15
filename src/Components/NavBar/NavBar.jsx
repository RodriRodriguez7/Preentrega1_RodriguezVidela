import React from "react"
import CartWidget from "../CartWidget/CartWidget.jsx";
import ProductosMates from "../Pages/ProductosPage.jsx";
import {Link} from "react-router-dom";
import img from "../NavBar/logobrand.jpg"

const NavBar = ({ color }) => {

return(
    <nav style={{ backgroundColor: color }}>
        <ul
        style={{
            display:"flex",
            height:"180px",
            color:"white",
            justifyContent:"space-around",
            alignItems:"center",
        }}
        >
        <div>
            <Link to={"/"}>
            <img src={img} alt="logo" width={250} height={150}/>
            </Link>
            </div>
        <Link style={{ listStyle:"none"}} to="/">
        <a style={{textDecoration: "none", color:"white"}}> Inicio</a>
            </Link>
        <Link style={{ listStyle:"none"}} to="/Productos">
        <a style={{textDecoration: "none", color:"white"}}> Productos</a>
            </Link>
        <Link style={{ listStyle:"none"}} to="/About">
        <a style={{textDecoration: "none", color:"white"}}> Nosotros</a>
            </Link>
        <Link style={{ listStyle:"none"}} to="/Contact">
        <a style={{textDecoration: "none", color:"white"}}> Contacto</a>
            </Link>
            <CartWidget/>
        </ul>
    </nav>
)
};

export default NavBar;