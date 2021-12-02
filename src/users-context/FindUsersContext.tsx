import React, { useContext } from 'react';
import FindUsers from '../users/FindUsers';
import UsersGrid, { Column } from '../users/UsersGrid';
import { UsersContext } from './UsersViewContext';

const columnConfig: Column[] = [
  {
    field: 'displayName',
    label: 'Display Name',
  },
  {
    field: 'userType',
    label: 'Type',
  },
  {
    field: 'address.city',
    label: 'City',
  },
  {
    field: 'address.state',
    label: 'State',
  },
];

const FindUsersContext = () => {
  const context = useContext( UsersContext );
  const re = new RegExp( context.searchTerm, 'i' );
  return (
    <>
      <div className="row">
        <div className="col">
          <FindUsers
            searchDisplayName={( searchText ) =>
              context.dispatch( 'FIND_USERS', searchText )
            }
          />
        </div>
      </div>
      <div className="row" hidden={context.searchTerm === ''}>
        <div className="col">
          <UsersGrid
            columns={columnConfig}
            users={context.users.filter( ( user ) => re.test( user.displayName ) )}
          />
        </div>
      </div>
    </>
  );
};

export default FindUsersContext;
