import React, { Component } from 'react';
import Field from './Field';
import CourseSelect from './CourseSelect';

export default class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      fields: { recipient: '', amount: '', fee: '', department: null, course: null },
      fieldErrors: {},
      transactions: [],
      _loading: false,
      _saveStatus: 'READY',
    };
  }

  validate() {
    const transaction = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errorMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!transaction.recipient) return true;
    if (!transaction.amount) return true;
    if (!transaction.department) return true;
    if (!transaction.course) return true;
    if (errorMessages.length) return true;

    return false;
  }

  onFormSubmit(ev) {
    const transaction = this.state.fields;

    ev.preventDefault();

    if (this.validate()) return;

    const transactions = [...this.state.transactions, transaction];

    this.setState({ _saveStatus: 'SAVING' });
    apiClient.saveTransactions(transactions)
      .then(() => {
        this.setState({ 
          transactions: transactions,
          fields: { recipient: '', amount: '', fee: '', department: null, course: null },
          _saveStatus: 'SUCCESS',
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ _saveStatus: 'ERROR' });
      });
  }

  onInputChange({name, value, error}) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors, _saveStatus: 'READY' });
  }

  componentWillMount() {
    this.setState({ _loading: true });
    apiClient.loadTransactions().then((transactions) => {
      this.setState({ _loading: false, transactions: transactions });
    });
  }
  
  render() {
    if (this.state._loading) {
      return <img alt='loading' src='/img/loading.gif' />;
    }

    const transactions = this.state.transactions.map(({ recipient, amount, fee }, i) =>
      <li key={i}>
        Recipient Address: {recipient}
        Amount: {amount}
        Transaction Fee: {fee}
      </li>
    );

    const submitButton = {
      SAVING: <input value='Saving...' type='submit' disabled />,
      SUCCESS: <input value='Saved!' type='submit' disabled />,
      ERROR: <input value='Save Failed - Retry?' type='submit' disabled={this.validate()} />,
      READY: <input value='Submit' type='submit' disabled={this.validate()} />,
    };

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
          <CourseSelect
            department={this.state.fields.department}
            course={this.state.fields.course}
            onChange={this.onInputChange}
          />
          <br />
          {submitButton[this.state._saveStatus]}
        </form>

        <h1>Transactions</h1>
        <ol>
          {transactions}
        </ol>
      </div>
    );
  }
}

const apiClient = {
  loadTransactions: function () {
    return {
      then: function (cb) {
        setTimeout(() => { 
          cb(JSON.parse(localStorage.transactions || '[]'));
        }, 1000);
      }
    };
  },
  
  saveTransactions: function (transactions) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.transactions = JSON.stringify(transactions);
        return resolve({ success });
      }, 1000);
    });
  },

  count: 1
};

