import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  // const [multiply, setMultiply] = useState(0)
  let multiplyBy = value * 5;
 
  const multiplyByValue = () => {
    setValue((prev) => prev + 1)
  }

  return (
    <>
      <h1>Multiply By : {value}</h1>
      <button onClick={multiplyByValue}>Multiply by : 5</button>
      <h2> 5 x {value} : {multiplyBy}</h2>
    </>
  )
}

export default App
