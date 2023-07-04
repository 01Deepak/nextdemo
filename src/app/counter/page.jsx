'use client'
import React, { useState } from 'react'

const Counter = () => {
 const [count, setCount] = useState(0)

 const handleIncrement = () => {
  setCount(count + 1);
 }

 const handleDecrement = () => {
  setCount(count - 1);
 }

  return (
    <>
    <div style={{textAlign:'center',padding:'50px'}}>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
    </>
  )
}

export default Counter