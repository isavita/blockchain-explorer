import React, { Component } from 'react';
import ProofOfWorkForm from './ProofOfWorkForm';
import SHA256 from 'crypto-js/sha256';

export default class ProofOfWork extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateBlockHash = this.calculateBlockHash.bind(this);
    this.state = {
      difficulty: 2,
      hash: ''
    }
  }

  handleSubmit(attrs) {
    this.setState({
      difficulty: attrs['difficulty'],
      hash: this.calculateBlockHash(attrs['difficulty'])
    });
  }

  calculateBlockHash(difficulty) {
    let hash = '';
    let nonce = 0;
    while (hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
      hash = SHA256(nonce + 'You should work really hard').toString();
      nonce++;
    };

    return hash;
  }

  render() {
    return (
      <div>
        <ProofOfWorkForm
          difficulty={this.state.difficulty}
          onFormSubmit={this.handleSubmit}
        />
        <h1>{this.state.hash}</h1>
      </div>
    );
  }
}
