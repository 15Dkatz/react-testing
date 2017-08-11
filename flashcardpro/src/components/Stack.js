import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;

    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>{title}</h3>
        <br />
        {
          cards.map(card => {
            return (
              <div key={card.id}>
                {card.prompt}
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { stack: state }
}

export default connect(mapStateToProps, null)(Stack);