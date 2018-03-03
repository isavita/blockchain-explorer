import React, { Component } from 'react';

export default class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.isEmail = this.isEmail.bind(this);

    this.state = {
      fields: { name: '', email: '' },
      fieldErrors: {},
      people: [],
    };
  }

  validate(person) {
    const errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    return errors;
  }

  onFormSubmit(ev) {
    ev.preventDefault();
    const errors = this.validate(this.state.fields);
    if (Object.keys(errors).length === 0) {
      this.setState({ 
        people: [...this.state.people, this.state.fields],
        fields: { name: '', email: '' },
        fieldErrors: {},
      });
    } else {
      this.setState({ fieldErrors: errors });
    }
  }

  onInputChange(ev) {
    const fields = this.state.fields;
    fields[ev.target.name] = ev.target.value;
    this.setState({ fields });
  }
  
  render() {
    const people = this.state.people.map(({ name, email }, i) => <li key={i}>{name} ({email})</li>);
    return (
      <div>
        <h1>Create Transaction</h1>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder='Name' name='name' value={this.state.fields.name} onChange={this.onInputChange}/>
          <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>
          <br />
          <input placeholder='Email' name='email' value={this.state.fields.email} onChange={this.onInputChange}/>
          <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>
          <br />
          <input type='submit' />
        </form>
        <h1>Names</h1>
        <ul className='input-people'>
          {people}
        </ul>
      </div>
    );
  }
}
