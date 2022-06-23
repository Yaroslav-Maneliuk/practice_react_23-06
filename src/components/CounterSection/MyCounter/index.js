import React, { Component } from "react";
import styles from "./RandomCounter.module.css";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      IsIncrementOrDecrement: true,
    };
  }
  switchState = () => {
    const { IsIncrementOrDecrement } = this.state;
    this.setState({ IsIncrementOrDecrement: !IsIncrementOrDecrement });
  };

  increment = () => {
    this.setState((state) => {
      const { count } = state;
      const newCount = count + 1;
      return { count: newCount };
    });
  };

  decrement = () => {
    this.setState((state) => {
      const { count } = state;
      const newCount = count - 1;
      return { count: newCount };
    });
  };

  AddOrSubstruction = () => {
    const { IsIncrementOrDecrement } = this.state;
    if (IsIncrementOrDecrement) {
      this.increment();
    } else {
      this.decrement();
    }
  };

  render() {
    const { count, IsIncrementOrDecrement } = this.state;
    return (
      <article className={styles.container}>
        <h2 className={styles.counter}>count: {count}</h2>
        <h2 className={styles.counter}>step: {count}</h2>
        <button className={styles.btn} onClick={this.AddOrSubstruction}>
          {IsIncrementOrDecrement ? "ADD" : "SUBSTRUCTION"}
        </button>
        <button className={styles.btn} onClick={this.IsIncrementOrDecrement}>
          CHANGE
        </button>
      </article>
    );
  }
}

export default MyCounter;
