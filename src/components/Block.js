import React, { Component } from 'react';
import ToggleableTransactionList from './ToggleableTransactionList';

export default class Block extends Component {
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header' data-tooltip='Index' data-position='left center'>
            {'Block ' + this.props.index}
          </div>
          <button
            className='ui basic button right floated icon'
            onClick={this.props.onBlockClose}
          >
            <i className='compress icon' />
          </button>
          <div className='meta' data-tooltip='Previous block hash' data-position='left center'>
            {this.props.previous_hash}
          </div>
          <div className='left aligned description'>
            <p data-tooltip='Block hash' data-position='left center'>
              {this.props.hash}
            </p>
            <p data-tooltip='Nonce used in Proof of Work' data-position='left center'>
              {this.props.nonce}
            </p>
            <p data-tooltip='Timestamp' data-position='left center'>
              {Date(this.props.timestamp).toString()}
            </p>
          </div>
          <div className='extra content center aligned transaction-list'>
            <ToggleableTransactionList isOpen={true}/>
          </div>
        </div>
      </div>
    );
  }
}
