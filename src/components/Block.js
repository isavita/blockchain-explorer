import React, { Component } from 'react';
import BlockHeader from './BlockHeader';
import ToggleableTransactionList from './ToggleableTransactionList';

export default class Block extends Component {
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
            <BlockHeader
              id={this.props.id}
              index={this.props.index}
              previous_hash={this.props.previous_hash}
              hash={this.props.hash}
              timestamp={this.props.timestamp}
            />
            <ToggleableTransactionList />
        </div>
      </div>
    );
  }
}
