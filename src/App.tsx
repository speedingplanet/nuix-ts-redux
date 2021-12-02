import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import DemosView from './demos/DemosView';
import ExperimentsView from './experiments/ExperimentsView';
import TransactionsView from './transactions/TransactionsView';
import UsersView from './users/UsersView';
import UsersViewContext from './users-context/UsersViewContext';

// class -> className
// for -> htmlFor (<label>)

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>Esri React + TypeScript</h1>
          </div>
        </header>
        <hr />
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="fw-bold"
                  className="nav-link"
                  to="/demos"
                >
                  Demos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="fw-bold"
                  className="nav-link"
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="fw-bold"
                  className="nav-link"
                  to="/users-context"
                >
                  Users (context and reducer)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="fw-bold"
                  className="nav-link"
                  to="/transactions"
                >
                  Transactions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="fw-bold"
                  className="nav-link"
                  to="/experiments"
                >
                  Experiments
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/demos">
          <DemosView />
        </Route>
        <Route path="/users">
          <UsersView />
        </Route>
        <Route path="/users-context">
          <UsersViewContext />
        </Route>
        <Route path="/transactions">
          <TransactionsView />
        </Route>
        <Route path="/experiments">
          <ExperimentsView />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
