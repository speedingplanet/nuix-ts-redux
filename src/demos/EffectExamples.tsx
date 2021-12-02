import React, { ReactElement, useEffect, useState } from 'react';

export default function EffectExamples(): ReactElement {
  const [ counter, setCounter ] = useState( 0 );
  const [ important, setImportant ] = useState( 0 );

  useEffect(
    () => {
      console.log( 'This effect runs every time we render' );
    }, /* optional array of dependencies here */
  );

  useEffect( () => {
    console.log( 'This runs once, somewhat similar to componentDidMount' );
  }, [] );

  useEffect( () => {
    console.log( `This updates when important changes. Important: ${important}` );
  }, [ important ] );

  useEffect( () => {
    console.log( 'Runs on every render, includes an unmount callback' );
    return () => {
      console.log( 'Running on component unmount' );
    };
  } );

  return (
    <section>
      <div className="row">
        <div className="col">
          <h4>The useEffect hook</h4>
          <p>Some stuff may happen</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Counter: {counter}</p>
          <button
            className="btn btn-primary"
            onClick={() => setCounter( counter + 1 )}
          >
            Increment
          </button>
          &nbsp;
          <button
            className="btn btn-warning"
            onClick={() => setImportant( important + 1 )}
          >
            Important
          </button>
        </div>
      </div>
    </section>
  );
}
