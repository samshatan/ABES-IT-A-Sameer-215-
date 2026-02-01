import React, { useState } from 'react'

function Card({ name, className, link }) {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  return (
    <div id='abc'>
      <h1>Card Component</h1>
      <img src={link} alt={name} style={{ width: width, height: height }} />
      <h3>Name:- {name}</h3>
      <h3>Class:- {className}</h3>
      <div className="buttons">
        <button onClick={() => setWidth(width+10)}>column Increase</button>
        <button onClick={() => setWidth(width-10)}>column Decrease</button>
        <button onClick={() => setHeight(height+10)}>row Increase</button>
        <button onClick={() => setHeight(height-10)}>row Decrease</button>
      </div>
    </div>
  )
}

export default Card;