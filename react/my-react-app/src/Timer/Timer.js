import React from "react";
import "./Timer.scss";
import moment from "moment";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }

  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h2>Timer:</h2>
        <div className="timer">{moment(this.state.date).format("LTS")}</div>
      </div>
    );
  }
}
