import React, { Component } from 'react';

class RandomCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {count:0}
  }
  
  render() {
    return (
      <article>
        <h2>{count}</h2>
      </article>
    );
  }
}

export default RandomCounter;

