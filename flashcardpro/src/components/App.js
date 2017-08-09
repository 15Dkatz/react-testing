import React, { Component } from 'react';
import StackList from './StackList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr/>
        <StackList />
      </div>
    )
  }
}

export default App;