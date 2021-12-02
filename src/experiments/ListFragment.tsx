import React from 'react';

const ListFragment = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* Shortcut for React.Fragment: <> */}
      <li>apples</li>
      <li>pears</li>
      <li>bananas</li>
      {/* Shortcut closing tag: </> */}
    </React.Fragment>
  );
};

export default ListFragment;
