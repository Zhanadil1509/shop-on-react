import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './app'

const App = () => {
  return (
    <>
      <Counter min={1} max={5} />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))