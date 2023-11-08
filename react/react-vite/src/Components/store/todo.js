import { makeAutoObservable } from "mobx";

class Todo {
  todosLimit = 12;
  todos = [
    { id: 1, title: "Breath", completed: false },
    { id: 2, title: "End sprint", completed: false },
    { id: 3, title: "Walk with dogs", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteAllTodos() {
    this.todos = [];
  }

  // в mobx не нужно доп. обработки для асинхронных action'ов, в redux нужно устанавливать redux fang, redux saga
  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
        this.todos.length = this.todosLimit;
      });
  }
}

const todo = new Todo();
export default todo;
