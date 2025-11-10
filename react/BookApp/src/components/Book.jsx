import React, { useState } from 'react'
import './book.css'
function Book(props) {

    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    return (
        <div id="book">
            <img src={props.img} alt="" height={170} width={170} />
            <h1>Title:{props.title}</h1>
            <h1>Price:{props.price}</h1>

            <div>
                <button onClick={increment}>+</button>
                <span>{count}</span>
                <button onClick={decrement}>-</button>
            </div>
          <center>
        <div id="adi">
          <Book title="Math" price="400" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLl1PDJCVU4a8YgxQo5FRpbj5cREf8sjx6w&s" />
          <Book title="Physice" price="700" img="https://cdn.iconscout.com/icon/premium/png-256-thumb/physics-book-icon-svg-download-png-1730255.png" />
          <Book title="Chemistry" price="800" img="https://png.pngtree.com/png-clipart/20231015/original/pngtree-chemistry-text-book-picture-image_13167835.png" />
          <Book title="Computer" price="1000" img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg" />
        </div>
      </center>
        </div>

    )
}

export default Book;