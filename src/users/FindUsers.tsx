import React, { useState } from 'react';

interface FindUsersProps {
  searchDisplayName: ( displayName: string ) => void;
}

const FindUsers = ( { searchDisplayName }: FindUsersProps ) => {
  const [ searchText, setSearchText ] = useState( '' );

  return (
    <section>
      <div className="row">
        <div className="col">
          <h3>Find Users</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-2">
            <label htmlFor="searchField" className="form-label">
              Enter a display name
            </label>
            <input
              type="text"
              className="form-control"
              id="searchField"
              name="searchField"
              value={searchText}
              onInput={( event ) => setSearchText( event.currentTarget.value )}
            />
          </div>
          <div>
            <button
              className="btn btn-info"
              onClick={() => searchDisplayName( searchText )}
            >
              Find Users
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsers;
