import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return 'hello world';
  }
}

export default hot(module)(App);
