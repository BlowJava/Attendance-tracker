import { useState } from 'react'
import './App.css'
import { MyComp } from 'Components/MyComp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Test</h1>
      <MyComp name='1'/>
    </>
  )
}

export default App
