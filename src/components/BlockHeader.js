import React, { Component } from 'react';

export default class BlockHeader extends Component {
  render() {
    return (
      <div className='block-header'>
        <div className='header'>
          {this.props.index}
        </div>
        <div className='meta'>
          {this.props.previous_hash}
        </div>
        <div className='center aligned block-hash'>
          {this.props.hash}
        </div>
        <div className='center aligned block-timestamp'>
          {this.props.timestamp}
        </div>
      </div>
    );
  }
}





