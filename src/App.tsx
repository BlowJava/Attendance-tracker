import { useState } from 'react'
import './App.css'
import { MyComp } from 'Components/MyComp'


function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1>Test</h1>
      <MyComp name={count.toString()}/>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
    </>
  )
}

export default App
