import React, { Component } from 'react';
import './App.css';
import List from './list'
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true, },
      { id: 2, name: "Learn React", complete: false, },
      { id: 3, name: "Graduate DPL", complete: false, },
    ]
   }

   getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
    const { todos } = this.state;
    const todo = { name, id: this.getUniqId() , complete: false }
    this.setState({ todos: [todo, ...todos] }); 
    }


   renderTodos = () => {
    const { todos, } = this.state
    return todos.map( todo =>
      <li key={todo.id}>{todo.name}</li>
    )
   }

   

  render() {
    return (
      <div className="App">
      <h1>ToDo React App</h1>
        <List name="Todo List" items={this.state.todos} />
        <TodoForm addItemFunction={this.addItem} />
      </div>
    );
  }
}

export default App;
