import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Links from './Links'
import AddLink from './AddLinks'

class App extends Component {
  render() {
    return (
      <div>
        
        <AddLink/>
       <Links/>
      </div>
    );
  }
}

export default App;
