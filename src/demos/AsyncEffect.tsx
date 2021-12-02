import { User } from '@speedingplanet/rest-server';
import React, { ReactElement, useEffect, useState } from 'react';

export default function AsyncEffect(): ReactElement {
  const [ user, setUser ] = useState<User | undefined>();
  const [ refresh, setRefresh ] = useState( false );
  const [ nextUserId, setNextUserId ] = useState( 101 );

  useEffect( () => {
    if ( nextUserId > 100 && nextUserId < 200 ) {
      fetch( `http://localhost:8000/api/zippay/v1/users/${nextUserId}` )
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        .then( ( response ) => response.json() )
        .then( ( fetchedUser ) => setUser( fetchedUser ) )
        .catch( ( err ) => console.error( err ) );
    }

    return () => {
      // if fetch is pending, cancel fetch
      // Otherwise nothing
      console.log( 'Umounting component' );
    };
  }, [ refresh, nextUserId ] );

  return (
    <section>
      <div className="row">
        <div className="col">
          {user != null
            ? (
              <ul>
                <li>Name: {user.displayName} </li>
                <li>Email: {user.email} </li>
                <li>City: {user.address.city} </li>
                <li>State: {user.address.state} </li>
              </ul>
            )
            : (
              <p>No user yet</p>
            )}
          <button
            className="btn btn-primary"
            onClick={() => setRefresh( !refresh )}
          >
            Refresh
          </button>
          &nbsp;
          <button
            className="btn btn-success"
            onClick={() => setNextUserId( nextUserId + 1 )}
          >
            Next user
          </button>
        </div>
      </div>
    </section>
  );
}
