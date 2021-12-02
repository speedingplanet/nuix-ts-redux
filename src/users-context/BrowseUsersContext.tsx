import React, { useContext } from 'react';
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

const BrowseUsers = () => {
  const context = useContext( UsersContext );
  console.log( 'browseusers context', context );
  return <UsersGrid users={context.users} columns={columnConfig} />;
};

export default BrowseUsers;
