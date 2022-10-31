import './App.css';
import Modal from './Modal';
import ReactDOM from 'react-dom';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {
        setShow(!show)
      }}>Click here to open Modal</button>
      {show && ReactDOM.createPortal(<Modal setShow={setShow} />, document.getElementById('modal'))}
    </div>
  );
}

export default App;
