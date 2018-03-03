import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Blockchain from './components/Blockchain';
import ProofOfWork from './components/ProofOfWork';
import TransactionProcessing from './components/TransactionProcessing';
import More from './components/More';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>Blockchain Explorer</h1>
          <ul className='header'>
            <li><NavLink exact to='/'>Blockchain</NavLink></li>
            <li><NavLink to='/proof-of-work'>Proof of work</NavLink></li>
            <li><NavLink to='/transaction-processing'>Transaction Processing</NavLink></li>
            <li><NavLink to='/more'>More</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Blockchain} />
            <Route path='/proof-of-work' component={ProofOfWork} />
            <Route path='/transaction-processing' component={TransactionProcessing} />
            <Route path='/more' component={More} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
