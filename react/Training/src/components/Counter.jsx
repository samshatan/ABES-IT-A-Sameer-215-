import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }

  const [color, setColor] = useState("Red");
  function changeColorOfButton(){
    setColor("Green")
  }
  return (
    <div>
      <div>
        <button style={{ backgroundColor: color }} onClick={changeColorOfButton}>{color}</button>
      </div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Counter;