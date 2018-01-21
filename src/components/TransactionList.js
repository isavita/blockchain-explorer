import React, { Component } from 'react';
import Transaction from './Transaction';

export default class TransactionList extends Component {
  render() {
    const transactions = [1, 2].map((transaction) => (
      <Transaction key={transaction} isOpen={transaction == 1} />
    ));
    return (
      <div id='transactions'>
        {transactions}
      </div>
    );
  }
}

