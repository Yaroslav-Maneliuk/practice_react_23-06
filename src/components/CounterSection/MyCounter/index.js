import React, { Component } from "react";
import styles from "./MyCounter.module.css";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isIncrement: true,
    };
  }
  switchState = () => {
    const { isIncrement } = this.state;
    this.setState({ isIncrement: !isIncrement });
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

  addOrSubstruction = () => {
    const { isIncrement } = this.state;
    if (isIncrement) {
      this.increment();
    } else {
      this.decrement();
    }
  };

  render() {
    const { count, isIncrement } = this.state;
    return (
      <article className={styles.container}>
        <h2 className={styles.counter}>count: {count}</h2>
        <h2 className={styles.counter}>step: {count}</h2>
        <button className={styles.btn} onClick={this.addOrSubstruction}>
          {isIncrement ? "ADD" : "SUBSTRUCTION"}
        </button>
        <button className={styles.btn} onClick={this.switchState}>
          CHANGE
        </button>
      </article>
    );
  }
}

export default MyCounter;
