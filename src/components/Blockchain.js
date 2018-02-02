import React, { Component } from 'react';
import ToggleableBlock from './ToggleableBlock';
require ('../seed.js');

export default class Blockchain extends Component {
  constructor(props) {
    super(props);

    this.state = { blocks: [] };
  }

  render() {
    return (
      <div className="blockchain">
        <ToggleableBlock
          id={'block-1'}
          index={1}
          date={'null'}
          previous_hash={'null'}
          hash={'000005e3b13ab5ab8272a78ec'}
          nonce={'4125931309'}
          timestamp={new Date().getTime()}
        />
        <ToggleableBlock
          id={'block-2'}
          index={2}
          date={null}
          previous_hash={'000005e3b13ab5ab8272a78ec'}
          hash={'00000d387a3f3e5c0aebd3847'}
          nonce={'1350385326'}
          timestamp={new Date().getTime() + 587000}
        />
      </div>
    );
  }
}
