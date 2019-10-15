import React from 'react';
import './cardl-list.style.css';
import Card from "../card/card.component";
import {search} from "../../utils/utils";
import Search from "../Search/Search.component";

export default  function CardList(props) {
  return <>
    <Search handOnChange={props.onchange} />
    <div className={"card-list"}>
    {props.users.map((item, key) => <Card key={key} {...item} /> )}
  </div>
    </>;
}
