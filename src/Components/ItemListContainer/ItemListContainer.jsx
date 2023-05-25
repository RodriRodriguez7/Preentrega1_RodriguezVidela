import React from "react";

const ItemListContainer = ({greeting}) => {
return(
    <div style={{backgroundColor:"black"}}>
        <p style={{
            display:"flex",
            height:"100px",
            color:"white",
            justifyContent:"space-around",
            alignItems:"center",
        }}
        >
        {greeting}</p>
    </div>
);
};

export default ItemListContainer;