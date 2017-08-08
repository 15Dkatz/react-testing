import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className='note'>
        <p>{this.props.note.text}</p>
      </div>
    )
  }
}

export default Note;