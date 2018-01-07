import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      <div className="block">
        <p>{this.props.index}</p>
        <span>Previous Hash:</span>
        <p>{this.props.previous_hash}</p>
        <span>Hash:</span>
        <p>{this.props.hash}</p>
        <span>Timestamp:</span>
        <p>{this.props.timestamp}</p>
        <span>Transactions:</span>
      </div>
    );
  }
}

export default Block;
