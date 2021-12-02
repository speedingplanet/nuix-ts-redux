import React, { ReactElement } from 'react';
import { Link, Route, useParams } from 'react-router-dom';

export default function RoutingWithParams(): ReactElement {
  return (
    <section>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <Link to="/demos/route-params/apples">Apples</Link>
            </li>
            <li>
              <Link to="/demos/route-params/bananas">Bananas</Link>
            </li>
            <li>
              <Link to="/demos/route-params/pears">Pears</Link>
            </li>
            <li>
              <Link to="/demos/route-params/watermelon">Watermelon</Link>
            </li>
            <li>
              <Link to="/demos/route-params/oranges">Oranges</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Route path="/demos/route-params/:fruit">
            <FruitRoute />
          </Route>
        </div>
      </div>
    </section>
  );
}

interface FruitParams {
  fruit: string;
}

function FruitRoute(): ReactElement {
  const { fruit } = useParams<FruitParams>();
  return (
    <div>
      <p>The selected fruit is {fruit}</p>
    </div>
  );
}
