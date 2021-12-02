import { User } from '@speedingplanet/rest-server';
import React from 'react';
import lodashGet from 'lodash/get';
import './UsersGrid.css';

// displayName / Display Name
export interface Column {
  field: string;
  label: string;
}

interface UsersGridProps {
  users: User[];
  columns: Column[];
}

type GridColumns = Pick<UsersGridProps, 'columns'>;
type GridRowProps = GridColumns & { user: User };

const UsersGrid = ( { users, columns }: UsersGridProps ) => {
  return (
    <div className="flex-container">
      <UsersGridHeader columns={columns} />
      {users.map( ( user ) => (
        <UsersGridRow user={user} columns={columns} key={user.id} />
      ) )}
    </div>
  );
};

const UsersGridHeader = ( { columns }: GridColumns ) => (
  <div className="flex-header">
    {columns.map( ( col ) => (
      <div key={col.field} className="flex-column-header">
        {col.label}
      </div>
    ) )}
  </div>
);

const UsersGridRow = ( { user, columns }: GridRowProps ) => {
  return (
    <div className="flex-row">
      {columns.map( ( { field } ) => (
        <div key={field} className="flex-cell">
          {lodashGet( user, field )}
        </div>
      ) )}
    </div>
  );
};

export default UsersGrid;
