import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'

const App = () => {
  return (
    <>
      <Counter min={10} max={25} />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))