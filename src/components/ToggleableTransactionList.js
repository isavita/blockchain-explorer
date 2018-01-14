import React, { Component } from 'react';
import ToggleableTransaction from './ToggleableTransaction';

export default class ToggleableTransactionList extends Component {
  render() {
    const transactions = [1, 2].map((transaction) => (
      <ToggleableTransaction key={transaction} isOpen={transaction == 1} />
    ));

    return (
      <div id='transactions'>
        {transactions}
      </div>
    );
  }
}

