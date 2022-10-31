import './App.css';

const show = false

function App() {
  if (show)
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  else {
    return (<div className='App'>
      <h1>Oops!!!</h1>
    </div>)
  }
}

export default App;
