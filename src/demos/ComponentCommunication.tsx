import React, { ChangeEventHandler, ReactElement, useState } from 'react';

export default function ComponentCommunication(): ReactElement {
  const [ siblingMessage, setSiblingMessage ] = useState( '' );

  const handleTellParent = ( message: string ): void => {
    setSiblingMessage( message );
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-light text-center">
              <h4>Parent</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>Intercepted message: {siblingMessage}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <SiblingOne tellParent={handleTellParent} />
                </div>
                <div className="col">
                  <SiblingTwo message={siblingMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SiblingOneProps {
  tellParent: ( message: string ) => void;
}

function SiblingOne( { tellParent }: SiblingOneProps ): ReactElement {
  const [ message, setMessage ] = useState( '' );

  const handleUpdateField: ChangeEventHandler<HTMLInputElement> = ( event ) => {
    setMessage( event.currentTarget.value );
  };

  return (
    <div className="card h-100">
      <div className="card-header bg-secondary text-light text-center">
        <h4>Sibling One</h4>
      </div>
      <div className="card-body">
        <div className="form-group mb-2">
          <label htmlFor="message-box">Send a message from here:</label>
          <input
            type="text"
            id="message-box"
            className="form-control"
            onChange={handleUpdateField}
            value={message}
          />
        </div>
        <button className="btn btn-warning" onClick={() => tellParent( message )}>
          Send message
        </button>
      </div>
    </div>
  );
}

function SiblingTwo( { message = '' }: { message?: string } ): ReactElement {
  return (
    <div className="card h-100">
      <div className="card-header bg-secondary text-light text-center">
        <h4>Sibling Two</h4>
      </div>
      <div className="card-body">
        <p>To here: {message}</p>
      </div>
    </div>
  );
}
