import React, { Component } from 'react';
import ToggleableBlock from './ToggleableBlock';
require ('../seed.js');

export default class Blockchain extends Component {
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
          previous_hash={'somerandomhash'}
          hash={'the_hash_of_this_block'}
          timestamp={new Date().getTime()}
          isOpen={true}
        />
        <ToggleableBlock
          id={'block-1'}
          index={1}
          date={null}
          previous_hash={'somerandomhash'}
          hash={'the_hash_of_this_block'}
          timestamp={new Date().getTime()}
          isOpen={false}
        />
      </div>
    );
  }
}
