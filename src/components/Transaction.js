import React, { Component } from 'react';

export default class Transaction extends Component {
  render() {
    return (
      <div className='ui celled grid'>
        <div className='row'>
          <div className='intups eight wide column'>
            <h5 data-tooltip='Input addresses' data-position='left center'>
              Inputs:
            </h5>
            <p>{'Input Address 1'}</p>
            <div>
              <h5 data-tooltip='Total input amount' data-position='left center'>
                {'10.789 BTC'}
              </h5>
            </div>
          </div>
          <div className='outputs eight wide column'>
            <h5 data-tooltip='Output addresses' data-position='right center'>
              Outputs:
            </h5>
            <p>{'Output Address 1'}</p>
            <p>{'Output Address 2'}</p>
            <div>
              <h5 data-tooltip='Total output amount' data-position='right center'>
                {'10 BTC'}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
