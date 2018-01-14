import React, { Component } from 'react';

export default class Transaction extends Component {
  render() {
    return (
      <div className='transaction'>
        <div className='intups'>
          <p>'Input Address 1'</p>
        </div>
        <div className='outputs'>
          <p>'Output Address 1'</p>
          <p>'Output Address 2'</p>
        </div>
      </div>
    );
  }
}
