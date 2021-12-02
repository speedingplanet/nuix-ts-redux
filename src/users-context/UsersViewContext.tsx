/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUserContext';
import BrowseUsers from './BrowseUsersContext';
import FindUsers from './FindUsersContext';
import { User, UserProfile, dao } from '@speedingplanet/rest-server';
import { AnyAction } from '@reduxjs/toolkit';

interface UsersContextProps {
  dispatch: ( field: string, value: any ) => void;
  users: User[];
  isLoading?: boolean;
  requestError?: Error | null;
  searchTerm: string;
  newUser?: UserProfile;
}

export const UsersContext = React.createContext<UsersContextProps>( {
  users: [],
  searchTerm: '',
  dispatch: () => null,
} );

function reducer( state: UsersContextProps, action: AnyAction ) {
  console.log( 'reducer handling', action.type );
  switch ( action.type ) {
  case 'ADD_USER':
    return {
      ...state,
      users: [ ...state.users, action.payload ],
      newUser: action.payload,
    };
  case 'FIND_USERS':
    return { ...state, searchTerm: action.payload };
  case 'LOAD_USERS_START':
  case 'PERSIST_NEW_USER_START':
    return { ...state, isLoading: true, requestError: null };
  case 'PERSIST_NEW_USER_ERROR':
  case 'LOAD_USERS_ERROR':
    return { ...state, requestError: action.payload, isLoading: false };
  case 'LOAD_USERS_SUCCESS':
    return { ...state, users: action.payload.data, isLoading: false };
  case 'PERSIST_NEW_USER_SUCCESS':
    console.log( 'PERSIST_NEW_USER_SUCCESS payload: ', action.payload );
    return { ...state, isLoading: false };
  default:
    throw new Error( 'Missed case!' );
  }
}

const actionCreator = ( type: string, payload: any ) => ( {
  type,
  payload,
} );

const initialState: UsersContextProps = {
  users: [],
  searchTerm: '',
  isLoading: false,
  requestError: null,
  dispatch: () => null,
};

function getUsersPromise( dispatch: React.Dispatch<AnyAction> ) {
  // fetch the users
  dispatch( { type: 'LOAD_USERS_START' } );
  dao
    .findAllUsers()
    .then( ( { data: users } ) =>
      dispatch( { type: 'LOAD_USERS_SUCCESS', payload: users } ),
    )
    .catch( ( err ) => {
      dispatch( { type: 'LOAD_USERS_ERROR', payload: err } );
      console.error( 'Failed to fetch or process users: ', err );
    } );
  // dispatch new users to the reducer
}

async function getUsersAsync( dispatch: React.Dispatch<AnyAction> ) {
  dispatch( { type: 'LOAD_USERS_START' } );
  try {
    let users = await dao.findAllUsers();
    dispatch( { type: 'LOAD_USERS_SUCCESS', payload: users } );
  } catch ( err ) {
    dispatch( { type: 'LOAD_USERS_ERROR', payload: err } );
    console.error( 'Failed to fetch or process users: ', err );
  }
}

export default function UsersViewContext() {
  const [ state, dispatch ] = useReducer( reducer, initialState );

  // useEffect( () => getUsersPromise( dispatch ), [] );
  useEffect( () => {
    void getUsersAsync( dispatch );
  }, [] );

  useEffect( () => {
    if ( state.newUser != null ) {
      dispatch( { type: 'PERSIST_NEW_USER_START' } );
      dao
        .addUser( state.newUser )
        .then( ( user ) => {
          dispatch( { type: 'PERSIST_NEW_USER_SUCCESS', payload: user } );
        } )
        .catch( ( err ) => {
          dispatch( { type: 'PERSIST_NEW_USER_ERROR', payload: err } );
          console.error( err );
        } );
    }
  }, [ state.newUser ] );

  const definedContext: UsersContextProps = {
    users: state.users,
    searchTerm: state.searchTerm,
    dispatch: ( field, value ) => dispatch( actionCreator( field, value ) ),
  };

  return (
    <UsersContext.Provider value={definedContext}>
      <section>
        <div className="row">
          <div className="col">
            <h2>Users</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/users-context/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-context/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-context/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users-context/add">
        <AddUser />
      </Route>
      <Route path="/users-context/find">
        <FindUsers />
      </Route>
      <Route path="/users-context/browse">
        <BrowseUsers />
      </Route>
    </UsersContext.Provider>
  );
}
