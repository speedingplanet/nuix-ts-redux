/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

interface PersonState {
  firstName: string;
  lastName: string;
}

const MinimalState = (): JSX.Element => {
  // let count = 0;
  /*
  const valueAndSetter = useState( 0 );
  const count = valueAndSetter[0];
  const setCount = valueAndSetter[1];
  */
  const [ count, setCount ] = useState( 0 );

  /*
  const [ someDate, setDate ] = useState( new Date() );
  const [ list, setList ] = useState( [] );
  const [ person, setPerson ] = useState<PersonState>( {
    firstName: 'John',
    lastName: 'Paxton',
  } );
  */

  const [ counter, setCounter ] = useState( { value: 0 } );

  return (
    <div>
      <p>You clicked on the button {counter.value} times</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          // counter.value = counter.value + 1;
          // setCounter( counter ); // no re-render
          setCounter( { value: counter.value + 0 } ); // re-render
        }}
      >
        {/* <button className="btn btn-danger" onClick={() => setCount( count + 1 )}> */}
        {/* <button className="btn btn-danger" onClick={() => ( count = count + 1 )}> */}
        Increment
      </button>
    </div>
  );
};

export default MinimalState;
