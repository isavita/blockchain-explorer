import React, { Component } from 'react';

export default class ProofOfWorkForm extends Component {
  constructor(props) {
    super(props);

    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      difficulty: this.props.difficulty || 1,
    }
  }

  handleDifficultyChange(e) {
    this.setState({ difficulty: e.target.value });
  }

  handleSubmit() {
    this.props.onFormSubmit({
      difficulty: this.state.difficulty
    });
  }

  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Hash puzzle difficulty</label>
              <input
                type='text'
                value={this.state.difficulty}
                onChange={this.handleDifficultyChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
