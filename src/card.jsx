import React from "react";
import image from "./assets/locater.png"
import "./card.css"
export default function Card(props){
    return(
        <div className="card--container">
            <img src={props.items.imageUrl} alt="hello" className="card--image"/>
            <div className="card--details">
                  <div classname="card--details--sub">
                    <img src={image} alt="locater" className="locater--image"/>
                    {props.items.location}
                    <a href={props.items.googleMapsUrl} className="locater">View on Google Maps</a>
                  </div>
                  <h1>{props.items.title}</h1>
                  <h4 className="card--date">{props.items.startDate} - {props.items.endDate}</h4>
                  {props.items.description}
            </div>
        </div>
    )
}