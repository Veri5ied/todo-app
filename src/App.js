import React, { Component } from "react";
import Todos from "./component/todos/Todos";
import Header from "./component/header/Header";
import AddTodo from "./component/form/AddTodo"

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Lets play video game" },
      { id: 2, content: "Lets chat on whatsapp" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
