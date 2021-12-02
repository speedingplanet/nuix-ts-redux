import React, { useState } from 'react';

const LiveGreeter = () => {
  const [ name, setName ] = useState( '' );

  function handleUpdate( event: React.FormEvent<HTMLInputElement> ): void {
    // console.log( 'Value in the form: ', event.currentTarget.value );
    setName( event.currentTarget.value );
  }

  return (
    <div className="form-group">
      <label htmlFor="your-name">Enter your name:</label>
      <input
        type="text"
        id="your-name"
        className="form-control"
        onInput={handleUpdate}
        value={name}
      />
      {name.length >= 2 ? <p>Greetings, {name}</p> : <p></p>}
    </div>
  );
};

export default LiveGreeter;
