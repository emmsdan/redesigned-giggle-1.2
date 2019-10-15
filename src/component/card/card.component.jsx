import React from "react";
import './card.style.css';

export default function Card(props) {
  const { name, email, photo, location, state } = props;
  return <div className={"card"}>
    <div className={"header"}>
      <img src={photo} alt={name} />
      {name} </div>
    <div className={"info"}>
      <span className={'email'}> { email } </span>
      <br/>
      <span className="fa fa-home"/>
      {location},
      <br/>
      {state}
    </div>
  </div>;
}