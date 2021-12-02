import React from 'react';

export default function HelloWorld( props: any ): JSX.Element {
  // let message = 'Hello world, from a variable';

  return <h3>{props.message}</h3>;
}
