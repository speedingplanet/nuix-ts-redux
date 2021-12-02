import { User } from '@speedingplanet/rest-server';
import React from 'react';
import UsersGrid, { Column } from './UsersGrid';

export interface BrowseUsersProps {
  users: User[];
}

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

const BrowseUsers = ( { users }: BrowseUsersProps ) => {
  return <UsersGrid users={users} columns={columnConfig} />;
};

export default BrowseUsers;
