import React, { Component } from "react";
import styles from "./RandomCounter.module.css"

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <article className={styles.container}>
        <h2 className={styles.counter}>{count}</h2>
        <button className={styles.btn}>A/S</button>
        <button className={styles.btn}>CHANGE</button>
      </article>
    );
  }
}

export default MyCounter;
