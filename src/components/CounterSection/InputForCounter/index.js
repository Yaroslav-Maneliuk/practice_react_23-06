import React, { Component } from "react";
import styles from "./InputForCounter.module.css";

class InputForCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <input className={styles.input} type="text" name="number" />
        <input className={styles.input} type="submit" value="Send" />
      </div>
    );
  }
}

export default InputForCounter;
