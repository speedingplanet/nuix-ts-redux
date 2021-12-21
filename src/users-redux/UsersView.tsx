/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import AddUser from '../users/AddUser';
import FindUsers from '../users/FindUsers';
import BrowseUsers from '../users/BrowseUsers';
import { addUser, setFilter } from './users-slice';
import { useAppDispatch, useAppSelector } from './users-hooks';
import { store } from './users-store';

const UsersView = () => {
  let users = useAppSelector( ( state ) => state.users.users );
  let filter = useAppSelector( ( state ) => state.users.filter );
  let dispatch = useAppDispatch();

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
        <FindUsers
          searchDisplayName={( displayName ) => dispatch( setFilter( displayName ) )}
        />
        <BrowseUsers
          users={users.filter( ( user ) => user.displayName.includes( filter ) )}
        />
      </Route>
      <Route path="/users-redux/browse">
        <h3>Browse Users</h3>
        <BrowseUsers users={users} />
      </Route>
      <Route path="/users-redux/add">
        <h3>Add User</h3>
        <AddUser createUser={( userProfile ) => dispatch( addUser( userProfile ) )} />
      </Route>
    </>
  );
};

const Wrapper = () => (
  <Provider store={store}>
    <UsersView />
  </Provider>
);

export default Wrapper;
