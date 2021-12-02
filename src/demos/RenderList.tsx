import React, { ReactElement, useState } from 'react';
import { orderBy } from 'lodash';

/*

First render:
apples
bananas
oranges

Second render:
apples
***pears***
***bananas***
***oranges***

========================

First render:
apples/1
bananas/2
oranges/3

Second render:
apples/1
***pears/4***
bananas/2
oranges/3

*/

let originalShips = [
  { owner: 'United Federation of Planets', name: 'Enterprise-D', id: 1 },
  { owner: 'Weyland-Yutani', name: 'Sulaco', id: 2 },
  { owner: 'Weyland-Yutani', name: 'Nostromo', id: 3 },
  { owner: 'US Government', name: 'Alabama', id: 4 },
  { owner: 'Jonas Grumby', name: 'Minnow', id: 5 },
  { owner: 'Mal Reynolds', name: 'Serenity', id: 6 },
  { owner: 'Ahab', name: 'Pequod', id: 7 },
  { owner: 'Dread Pirate Roberts', name: 'Revenge', id: 8 },
  { owner: 'Various', name: 'Black Pearl', id: 9 },
];

export default function RenderList(): ReactElement {
  const [ ships, setShips ] = useState( originalShips );

  const handleSortButton = (): void => {
    setShips( orderBy( ships, 'name', 'asc' ) );
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <ul>
            {ships.map( ( ship ) => (
              <li key={ship.id}>{ship.name}</li>
            ) )}
          </ul>
          <button className="btn btn-danger" onClick={handleSortButton}>
            Sort
          </button>
        </div>
      </div>
    </section>
  );
}
