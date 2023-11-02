import React from 'react'
import { useState } from 'react'
import CountDisplay from "./CountDisplay"

const Counter = () => {
  const [count, setCount] = useState(0)
  const display = count < 6 ? "btn btn-dark ms-1" : "btn btn-success ms-1";

  return (
    <div className="text-center">
      <CountDisplay count={count}/>
      <button className={display} onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <button className={display} onClick={() => setCount((count) => (count > 0 ? count - 1 : count)
      )}>
        Decrement
      </button>
    </div>
  )
}

export default Counter