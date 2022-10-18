import React, { Component} from 'react';
import logo from './logo.svg';
import TodoList from "./components/TodoList/TodoList";
import './App.css';
import Form from "./components/Form/Form";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInput : "",
      todos : [],
    }
  }
}

// Eğer input alanı boş değilse todos' a eklenecek
addItem = () => {
  // inputa yazılı olan string değer
  const currentValue = this.state.userInput;

  if (this.state.userInput !== "") {
    const userInput = {
      // Delete yaparken kullanılabilmesi için bir her item için random bir id
      id : Math.random(),
      content: currentValue,
    }

    this.setState (
      {
        // Var olan array'i korumak için spread operatör kullanılıyor
        // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
        todos: [...this.state.todos, userInput],
      },
      () => {
        // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
        this.setState({
        userInput: "",
      })
  }
}

function App() {

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
