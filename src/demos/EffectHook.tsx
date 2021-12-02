import React, { useEffect, useState, useRef } from 'react';

export default function EffectHook(): JSX.Element {
  const [ counter, setCounter ] = useState( 0 );
  const [ otherCounter, setOtherCounter ] = useState( 0 );
  const [ oneTimeEffect, setOneTimeEffect ] = useState( Date.now() );
  const [ dataChangeEffect, setDataChangeEffect ] = useState( Date.now() );

  // Use a ref to store an arbitrarty value
  const everyRenderRef = useRef( Date.now() );

  useEffect( () => {
    console.log( 'Effect: runs every render' );
    // Don't update state, because that would provoke an infinite loop
    everyRenderRef.current = Date.now();
  } );

  useEffect( () => {
    console.log( 'Effect: runs once' );
    setOneTimeEffect( Date.now() );
    return () => {
      console.log( 'This will run when the component is destroyed.' );
    };
  }, [] );

  useEffect( () => {
    console.log( 'Effect: runs when data changes' );
    setDataChangeEffect( Date.now() );
  }, [ counter ] );

  return (
    <div className="row">
      <div className="col">
        <h2>The Effect Hook</h2>
        <ul>
          <li>Runs once: {oneTimeEffect}</li>
          <li>Runs every render: {everyRenderRef.current}</li>
          <li>
            Runs when data changes: {dataChangeEffect}
            <br />
            <button
              className="btn btn-sm btn-primary"
              onClick={() => setCounter( counter + 1 )}
            >
              Change Effect Data
            </button>
            &nbsp;
            <button
              className="btn btn-sm btn-info"
              onClick={() => setOtherCounter( otherCounter + 1 )}
            >
              Change irrelevant data
            </button>
            <br />
            <p>
              Counter: {counter} / Other counter: {otherCounter}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
