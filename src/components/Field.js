import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      error: false
    };
  }

  onChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <span style={{ color: 'red' }}>{this.state.error}</span>
      </div>
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  validate: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default Field;

