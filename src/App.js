import DelAmount from './DelAmount';
import Add from './Add';
import AddAmount from './AddAmount';
import './App.css';
import Counter from './Counter';
import Delete from './Delete';
import { useCount } from './Store';



function App() {
  const [state, dispatch] = useCount()
  return (
    <div className="App">
      <p>Use the buttons below to change the counter</p>
      <Counter />
      <Add />
      <Delete />
      <AddAmount />
      <DelAmount />
    </div>
  );
}

export default App;
