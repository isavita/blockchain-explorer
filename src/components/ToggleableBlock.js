import React, { Component } from 'react';
import Block from './Block';

export default class ToggleableBlock extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <Block
          id={this.props.id}
          index={this.props.index}
          date={this.props.date}
          previous_hash={this.props.previous_hash}
          hash={this.props.hash}
          timestamp={this.props.timestamp}
        />
      );
    } else {
      return (
        <div className='ui centered card'>
          <div className='image'>
            <img src='block.png' />
          </div>
          <div className='content'>
            <div className='header left floated'>
              <h2>{this.props.index}</h2>
            </div>
            <div className='meta'>
              <h3>{this.props.previous_hash}</h3>
            </div>
            <div className='extra content right floated'>
              <button className='ui basic button icon'>
                <i className='expand icon' />
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
