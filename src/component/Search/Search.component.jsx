import React from 'react';
import './Search.style.css';

export default function Search({handOnChange}) {
  return <div className={"search"}>
    <input type="search" placeholder="search users" onChange={handOnChange}/>
    <span className={"fa fa-search"}/>
  </div>;
}