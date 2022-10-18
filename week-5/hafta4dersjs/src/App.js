import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm/index.js';

function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <AddTodoForm defaultValue=""/>
      <br/>
      {list.map(item => <p>{item.text}-{item.date}</p>)}
    </div>
  );
}

export default App;
