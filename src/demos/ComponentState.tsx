import React, { useState } from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentState(): JSX.Element {
  const [ counter, setCounter ] = useState( 0 );

  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard title="Component State" bodyClasses="text-center">
            <p>{counter}</p>
            <button
              className="btn btn-primary"
              onClick={() => setCounter( counter + 1 )}
              // onClick={() => setState( counter + 1 )}
              // onClick={() => setState( { ...state, counter: state.counter + 1 } )}
            >
              Increment the counter
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}
