import React from 'react';
import Card from './Card';
import Data from './Mydata';

function dcard(elem){
  return(<Card
     key = {elem.key}
     imgsrc = {elem.imgsrc}
     name = {elem.name}
     title = {elem.Title}
     link = {elem.link}
   />);
 }
 var App = Data.map((val)=>dcard(val));
 export default App;