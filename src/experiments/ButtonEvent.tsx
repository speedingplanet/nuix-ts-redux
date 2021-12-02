/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// function ButtonEventFn() {}
const ButtonEvent = (): JSX.Element => {
  function handleButtonClick(): void {
    console.log( 'You clicked on the button!' );
  }

  const handleButtonClickExpression = function(): void {
    console.log( 'You clicked on the button!' );
  };

  const handleButtonClickArrow = (): void => {
    console.log( 'You clicked on the button!' );
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
};

const ButtonEventInline = (): JSX.Element => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log( '[Inline] You clicked on the button!' );
        }}
      >
        Click me
      </button>
    </div>
  );
};

const ButtonClickTrack = (): JSX.Element => {
  function handleButtonClick( initialValue: number ): void {
    console.log( `You clicked on the button ${initialValue} times.` );
  }

  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => handleButtonClick( 5 )}
      >
        Click me
      </button>
    </div>
  );
};

const ButtonClickEventObject = (): JSX.Element => {
  function handleButtonClick( event: React.FormEvent<HTMLButtonElement> ): void {
    console.log( 'Event: ', event );
    console.log( 'Element that fired the event: ', event.currentTarget.disabled );
    // console.log( 'Element that fired the event: ', event.target.disabled );
  }

  const handleButtonClick2: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    console.log( 'Event: ', event );
    console.log( 'Element that fired the event: ', event.currentTarget.disabled );
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
};

export default ButtonClickEventObject;
