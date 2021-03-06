import React, { Component, PropTypes } from 'react';
import Header from '../components/layout/Header/Header'
import './App.css';

class App extends Component {
  static propTypes = {
    children : PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
