import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUser';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';
import { User, UserProfile, dao } from '@speedingplanet/rest-server';

export default function UsersView() {
  const [ users, setUsers ] = useState<User[]>( [] );
  const [ addButtonDisabled, setAddButtonDisabled ] = useState( false );
  const [ usersFilter, setUsersFilter ] = useState<RegExp | null>( null );

  useEffect( () => {
    dao
      .findAllUsers()
      .then( ( { data: users } ) => {
        setUsers( users );
      } )
      .catch( ( err ) => console.error( 'Problems:', err ) );
  }, [] );

  const handleSearchDisplayName = ( displayName: string ) => {
    setUsersFilter( new RegExp( displayName, 'i' ) );
  };

  const handleCreateUser = ( user: UserProfile ) => {
    // setUsers( [ ...users, user ] );
    console.log( 'TODO: handleCreateUser placeholder' );
    setAddButtonDisabled( true );
  };

  let displayUsers = [ ...users ];
  if ( usersFilter ) {
    displayUsers = displayUsers.filter( ( user ) =>
      usersFilter.test( user.displayName ),
    );
  }

  return (
    <>
      {/* <React.Fragment> */}
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
                <Link to="/users/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users/add">
        <AddUser
          createUser={handleCreateUser}
          buttonDisabled={addButtonDisabled}
        />
      </Route>
      <Route path="/users/find">
        <FindUsers searchDisplayName={handleSearchDisplayName} />
        {usersFilter
          ? (
            <>
              <div className="row my-2">
                <div className="col">
                Current filter is "
                  {usersFilter.source === '(?:)' ? 'none' : usersFilter.source}"
                </div>
              </div>
              <BrowseUsers users={displayUsers} />
            </>
          )
          : (
            <p></p>
          )}
      </Route>
      <Route path="/users/browse">
        <BrowseUsers users={users} />
      </Route>
    </> /* </React.Fragment> */
  );
}
