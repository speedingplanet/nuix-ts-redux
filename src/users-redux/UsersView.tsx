/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import AddUser from '../users/AddUser';
import FindUsers from '../users/FindUsers';
import UsersGrid from '../users/UsersGrid';

const UsersView = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col">
            <h2>Users (with Redux)</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/users-redux/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-redux/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-redux/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users-redux/find">
        <h3>Find Users</h3>
        {/* <FindUsers /> */}
      </Route>
      <Route path="/users-redux/browse">
        <h3>Browse Users</h3>
        {/* <UsersGrid /> */}
      </Route>
      <Route path="/users-redux/add">
        <h3>Add User</h3>
        {/* <AddUser /> */}
      </Route>
    </>
  );
};

export default UsersView;
