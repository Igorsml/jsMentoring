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

export default App;
export { Welcome, WelcomeClass };
