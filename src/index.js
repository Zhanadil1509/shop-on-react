import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './app'

const App = () => {
  return (
    <>
      <Counter />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))