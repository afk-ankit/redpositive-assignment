import { useState } from 'react';
import './App.css';

function App() {

  //This is an example of state and event
  const [input, setInput] = useState("")
  const [show, setShow] = useState(1)
  return (
    <div className="App">
      {show ? <p>{input}</p> : <></>}

      <input type="text" onChange={(e) => {
        setInput(e.target.value)
      }} placeholder={"Please enter a message"} />

      <button onClick={() => {
        setShow(!show)
      }}>Show/Hide</button>
    </div>
  );
}

export default App;
