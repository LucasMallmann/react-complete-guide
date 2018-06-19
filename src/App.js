import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is really working</p>
        <Person name="Lucas" age="20"/>
        <Person name="Matt" age="28"> <div></div> </Person>
        <Person name="Lari" age="18"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
