import React, {useState} from 'react'

const Counter = ({min, max}) => {

  const [cnt, setCnt] = useState(min)
  const [inpV, setInpV] = useState(min)

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

  const setVal = (newStr) => {
    setInpV(newStr)
  }

  const applyVal = () => {
    let str = parseInt(inpV)
    setM(isNaN(str) ? min : str)
  }

  return (
    <>
      <button onClick={decrease}>-</button>
      <input
        onChange={e => setVal(e.target.value)}
        onBlur={applyVal}
        value={cnt}
      />
      <button onClick={increase}>+</button>
    </>
  )
}

export default Counter