import React, { Component } from 'react';
import Block from './block.js';
require ('../seed.js');

export default class Blockchain extends Component {
  render() {
    const blockchain = window.Seed.blockchain.map((block) => (
      <Block
        key={'block-' + block.index}
        index={block.index}
        data={block.data}
        previous_hash={block.previous_hash}
        hash={block.hash}
        timestamp={block.timestamp}
      />
    ));

    return (
      <div className="blockchain">
        {blockchain}
      </div>
    );
  }
}
