import React, { Component } from 'react';
import Field from './Field';

export default class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      fields: { recipient: '', amount: '', fee: '' },
      fieldErrors: {},
      transactions: [],
    };
  }

  validate() {
    const transaction = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errorMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!transaction.recipient) return true;
    if (!transaction.amount) return true;
    if (errorMessages.length) return true;

    return false;
  }

  onFormSubmit(ev) {
    const transactions = this.state.transactions;
    const transaction = this.state.fields;

    ev.preventDefault();

    if (this.validate()) return;

    this.setState({ 
      transactions: transactions.concat(transaction),
      fields: { recipient: '', amount: '', fee: '' },
    });
  }

  onInputChange({name, value, error}) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  }
  
  render() {
    const transactions = this.state.transactions.map(({ recipient, amount, fee }, i) =>
      <li key={i}>
        Recipient Address: {recipient}
        Amount: {amount}
        Transaction Fee: {fee}
      </li>
    );
    return (
      <div>
        <h1>Create Transaction</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field 
            placeholder='Recipient Address'
            name='recipient'
            value={this.state.fields.recipient}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Recipient Address Required')}
          />
          <br />
          <Field
            placeholder='Amount'
            name='amount'
            value={this.state.fields.amount}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Amount Required')}
          />
          <br />
          <Field
            placeholder='Fee'
            name='fee'
            value={this.state.fields.fee}
            onChange={this.onInputChange}
            validate={(val) => (false)}
          />
          <br />
          <input type='submit' disabled={this.validate()}/>
        </form>

        <h1>Transactions</h1>
        <ol>
          {transactions}
        </ol>
      </div>
    );
  }
}
