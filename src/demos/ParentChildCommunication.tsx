import React, { ReactElement, useState } from 'react';

export default function ParentChildCommunication(): ReactElement {
  return (
    <section>
      <div className="row">
        <div className="col">
          <Parent />
        </div>
      </div>
    </section>
  );
}

function Parent(): ReactElement {
  const [ message, setMessage ] = useState( '' );

  function handleTellParent( input: string ): void {
    console.log( 'Message from Child component: ', input );
    setMessage( input );
  }

  return (
    <div style={{ border: '2px red solid', padding: '15px' }}>
      <h3>Parent</h3>
      <p>Message from Child component: {message}</p>
      <div>
        <Child foo="this is foo" tellParent={handleTellParent} />
      </div>
    </div>
  );
}

interface ChildProps {
  foo: string;
  tellParent: ( message: string ) => void;
}

function Child( { foo, tellParent }: ChildProps ): ReactElement {
  function handleButtonClick(): void {
    tellParent( 'The button in the Child component was clicked.' );
  }

  return (
    <div style={{ border: '2px blue solid', padding: '15px' }}>
      <h4>Child</h4>
      <p>props.foo: {foo}</p>
      <div>
        <button className="btn btn-success" onClick={handleButtonClick}>
          Send a message
        </button>
      </div>
    </div>
  );
}
