import React from 'react';
import './cardl-list.style.css';
import Card from "../card/card.component";

export default  function CardList(props) {
  return <>
    <p> Please, hover on a card to focus on it </p>
    <div className={"card-list"}>
    {props.users.map((item, key) => <Card key={key} {...item} /> )}
  </div>
    </>;
}
