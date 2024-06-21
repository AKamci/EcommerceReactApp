import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{border: "1px solid red"}}>
          + Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)} style={{marginLeft: '10px', border: "1px solid red"}}>
          - Decrement
        </button>
        <button onClick={() => setCount((count) => count*2)} style={{marginLeft: '10px', border: "1px solid red"}}>
          *2 Multiply
        </button>

      </div>
    </>
  )
}

export default App
