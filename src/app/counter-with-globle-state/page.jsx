'use client'
import useCounterStore from '@/stores/counter-with-globle-store'
import React from 'react'

const CounterWithGlobleState = () => {
  const {count,setCount } = useCounterStore();

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <>
    <div style={{
      textAlign:'center',
      padding: '50px'
    }}>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

    </div>
    </>
  )
}

export default CounterWithGlobleState