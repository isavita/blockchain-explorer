import React, { Component } from 'react';
import TransactionList from './TransactionList';

export default class ToggleableTransactionList extends Component {
  constructor(props) {
    super(props);

    this.handleTransactionListOpen = this.handleTransactionListOpen.bind(this);
    this.handleTransactionListClose = this.handleTransactionListClose.bind(this);
    this.transactionListOpen = this.transactionListOpen.bind(this);
    this.transactionListClose = this.transactionListClose.bind(this);
    this.state = { isOpen: false };
  }

  handleTransactionListOpen() {
    this.transactionListOpen();
  }

  handleTransactionListClose() {
    this.transactionListClose();
  }

  transactionListOpen() {
    this.setState({ isOpen: true });
  }

  transactionListClose() {
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <div>
          <h3
            data-tooltip='Transactions represented as Merkle Tree' data-position='top center'
            onClick={this.handleTransactionListClose}
          >
            Transactions
          </h3>
          <TransactionList />
        </div>
      );
    } else {
      return (
        <div>
          <h3
            data-tooltip='Transactions represented as Merkle Tree' data-position='top center'
            onClick={this.handleTransactionListOpen}
          >
            Transactions
          </h3>
        </div>
      );
    }
  }
}
