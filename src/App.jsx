import React from "react";
import Nav from "./navbar.jsx"
import Card from "./card.jsx";
import data from "./data.jsx";
export default function App(){
    const Cards=data.map(x => {
        {return (
          <Card
          items={x} 
          /> )}
    })
    return(
      <>
      <Nav/>
      {Cards}
      </>
    )
}
