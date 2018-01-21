import React, { Component } from 'react';
import Block from './Block';
import ToggleableTransactionList from './ToggleableTransactionList';

export default class ToggleableBlock extends Component {
  constructor(props) {
    super(props);

    this.handleBlockOpen = this.handleBlockOpen.bind(this);
    this.handleBlockClose = this.handleBlockClose.bind(this);
    this.blockOpen = this.blockOpen.bind(this);
    this.blockClose = this.blockClose.bind(this);
    this.state = { isOpen: false };
  }

  handleBlockOpen() {
    this.blockOpen();
  }

  handleBlockClose() {
    this.blockClose();
  }

  blockOpen() {
    this.setState({ isOpen: true });
  }

  blockClose() {
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <Block
          id={this.props.id}
          index={this.props.index}
          date={this.props.date}
          previous_hash={this.props.previous_hash}
          hash={this.props.hash}
          nonce={this.props.nonce}
          timestamp={this.props.timestamp}
          onBlockClose={this.handleBlockClose}
        />
      );
    } else {
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='header' data-tooltip='Index' data-position='left center'>
              {'Block ' + this.props.index}
            </div>
            <div className='meta' data-tooltip='Previous block hash' data-position='left center'>
              {this.props.previous_hash}
            </div>
            <div className='extra content'>
              <button
                className='ui basic button right floated icon'
                onClick={this.handleBlockOpen}
              >
                <i className='expand icon' />
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
