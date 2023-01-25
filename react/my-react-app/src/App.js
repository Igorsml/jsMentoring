import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">1</header>
    </div>
  );
}

// функциональный компонент
function Welcome(props) {
  return <header className="App-header">Hi, {props.name}</header>;
}

// классовый компонент
class WelcomeClass extends React.Component {
  render() {
    return <header className="App-header">Hi, {this.props.name}</header>;
  }
}

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = [
    "закончить документацию",
    "отправить пулреквест",
    "снова напомнить Дэну про ревью",
  ];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}

export default App;
export { Welcome, WelcomeClass, Item, TodoList };
