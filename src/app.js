import React, {useState} from 'react'

const Counter = ({min, max}) => {

  const [cnt, setCnt] = useState(1)

  const increase = () => {
    setM(cnt + 1)
  }

  const decrease = () => {
    setM(cnt -1)
  }

  const setM = (newCnt) => {
    let count = Math.min(Math.max(newCnt, min), max )
    setCnt(count)
  }

  return (
    <>
      <button onClick={decrease}>-</button>
      <p>{cnt}</p>
      <button onClick={increase}>+</button>
    </>
  )
}

export default Counter