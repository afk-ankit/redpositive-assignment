import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [load, setLoad] = useState(true)
  const [jokes, setJokes] = useState('')
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://official-joke-api.appspot.com/random_joke');
      const result = await data.json();
      setJokes({
        setup: result.setup,
        punchline: result.punchline
      })
    }

    getData()

  }, [load])


  return (
    <div className="App">
      <h1>Dad jokes</h1>
      <h3>{jokes.setup}</h3>
      <h3>{jokes.punchline}</h3>

      <button onClick={() => {
        setLoad(!load)
      }}>Get new Jokes</button>
    </div>
  );
}

export default App;
