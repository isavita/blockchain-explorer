import React, { Component } from 'react';
import Transaction from './Transaction';
import TransactionHeader from './TransactionHeader';

export default class ToggleableTransaction extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <Transaction
        />
      );
    } else {
      return (
        <TransactionHeader
        />
      );
    }
  }
}
