import React from "react";
import "./App.css";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">App render</header>
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
  const todos = ["task 1", "task 2", "task 3"];
  return (
    <header className="App-header">
      {" "}
      <ul>
        {todos.map((message, index) => (
          <Item key={message + index} message={message} />
        ))}
      </ul>{" "}
    </header>
  );
}
function ListSection({ title, people }) {
  return (
    <header className="App-header">
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </header>
  );
}

function List() {
  const chemists = people.filter((people) => people.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <header className="App-header">
      <ListSection title="Chemist" people={chemists} />
      <ListSection title="Everyone else" people={everyoneElse} />
    </header>
  );
}

export default App;
export { Welcome, WelcomeClass, Item, TodoList, List, ListSection };
