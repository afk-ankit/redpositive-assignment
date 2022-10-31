import './App.css';
import data from './data';
import List from './List';
function App() {
  return (
    <div className="App">
      {data.map(e => <List id={e.id} name={e.name} branch={e.branch} key={e.id} />)}
    </div>
  );
}

export default App;
