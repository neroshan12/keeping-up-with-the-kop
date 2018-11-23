import React, { Component } from 'react';
import Homepage from './components/Homepage'
import logo from './logo.svg';
import './App.css';

const localStyles = {
  background: "#C8102E",
  display: "flex",
  height: "100%"
}
class App extends Component {
  render() {
    return (
      <div style={localStyles}>
        <Homepage />


      </div>
    );
  }
}

export default App;
