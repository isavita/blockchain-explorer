import React, { Component } from 'react';
import ToggleableBlock from './ToggleableBlock';
require ('../seed.js');

export default class Blockchain extends Component {
  constructor(props) {
    super(props);

    this.state = { blocks: [] };
  }

  render() {
    // const blockchain = window.Seed.blockchain.map((block) => (
      // <Block
      //   key={'block-' + block.index}
      //   index={block.index}
      //   data={block.data}
      //   previous_hash={block.previous_hash}
      //   hash={block.hash}
      //   timestamp={block.timestamp}
      // />
    // ));

    return (
      <div className="blockchain">
        <ToggleableBlock
          id={'block-1'}
          index={1}
          date={null}
          previous_hash={'null'}
          hash={'the_hash_of_this_block1'}
          nonce={'Random1 32-bit Integer'}
          timestamp={new Date().getTime()}
        />
        <ToggleableBlock
          id={'block-2'}
          index={2}
          date={null}
          previous_hash={'first_block_hash'}
          hash={'the_hash_of_this_block1'}
          nonce={'Random2 32-bit Integer'}
          timestamp={new Date().getTime()}
        />
      </div>
    );
  }
}
