import React, { Component } from 'react';

export default class Transaction extends Component {
  render() {
    return (
      <div className='transaction-header'>
        <h3>Amount:</h3>
        <p>45</p>
        <button className='ui basic button icon'>
          <i className='expand icon' />
        </button>
      </div>
    );
  }
}
