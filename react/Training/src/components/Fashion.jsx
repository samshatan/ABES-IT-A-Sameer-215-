
import React from 'react';
import './Fashion.css';
const Fashion = ({props}) => {
  return (
    <div>
      <div>
        <h1>Fashion Show</h1>
      </div>
      <div id='card'>
        <img src={props.image} alt="" height={80} width={80} />
        <h4>Title {props.title}</h4>
        <h4>Price {props.price}</h4>
      </div>
    </div>
  );
};

export default Fashion;