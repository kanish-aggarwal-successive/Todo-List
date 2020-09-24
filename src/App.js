import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {

  state = {
    todos: [],
    count: 0
  }

  addTodo = (e) => {
    let newTodos = this.state.todos;

    // To make sure user is adding valid task
    if (e.target.firstChild.value !== "") {
      newTodos.push(e.target.firstChild.value);

      this.setState(prevstate => ({
        todos: newTodos,
        count: prevstate.count + 1
      }));
    }

    // To clear task input field
    e.target.firstChild.value = ""
    e.preventDefault();
  }

  removeTodo = (e) => {
    // To remove task from the list
    e.target.parentElement.parentElement.remove();

    this.setState(prevstate => ({
      count: prevstate.count - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <TodoList addTask={this.state} removeTodo={this.removeTodo} />
        <SubmitForm submitHandler={this.addTodo} />
      </div>
    );
  }
}


export default App;
