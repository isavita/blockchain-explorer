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
        <div className='ui celled grid'>
          <div className='row'>
            <div className='intups eight wide column'>
              <h5 data-tooltip='Input addresses' data-position='left center'>
                Inputs:
              </h5>
            </div>
            <div className='outputs eight wide column'>
              <h5 data-tooltip='Output addresses' data-position='right center'>
                Outputs:
              </h5>
              <p>{'Output Address 1'}</p>
              <div>
                <h5 data-tooltip='Miner reward' data-position='right center'>
                  {'25 BTC'}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

