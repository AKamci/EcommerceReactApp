import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState('');

  const handleInitialValueChange = (event) => {
    setInitialValue(event.target.value);
  };

  const handleSetInitialValue = () => {
    const parsedValue = parseInt(initialValue, 10);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
    } else {
      alert("Please enter a valid number");
    }
  };

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
        <button onClick={() => setCount((count) => count * 2)} style={{marginLeft: '10px', border: "1px solid red"}}>
          *2 Multiply
        </button>
        <button onClick={() => setCount(0)} style={{marginLeft: '10px', border: "1px solid red"}}>
          Reset 
        </button>
        <div style={{marginTop: '20px'}}>
          <input 
            type="text" 
            value={initialValue} 
            onChange={handleInitialValueChange} 
            placeholder="Set initial value" 
          />
          <button onClick={handleSetInitialValue} style={{marginLeft: '10px', border: "1px solid red"}}>
            Set Initial Value
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
