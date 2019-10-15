import React from "react";
import './card.style.css';

export default function Card(props) {
  const { name: { title, first, last }, email, picture: { medium }, location } = props;
  const { street: {number, name}, city, state, country } = location;
  return <div className={"card"}>
    <div className={"header"}>
      <img src={medium} />
      {title}. {last + " " + first} </div>
    <div className={"info"}>
      <span className={'email'}> { email } </span>
      <br/>
      <span className="fa fa-home"/>
      {" "} {number} {name} {city},
      <br/>
      {state} {country}
    </div>
  </div>;
}