import React from 'react';
import { Route, Link } from 'react-router-dom';
import ButtonEvent from './ButtonEvent';
import HelloWorld from './HelloWorld';
import HelloWorldProps from './HelloWorldProps';
import LiveGreeter from './LiveGreeter';
import LiveGreeterClass from './LiveGreeterClass';
import MinimalState from './MinimalState';

export default function ExperimentsView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Experiments</h2>
        </div>
      </div>
      <div className="row">
        {/* Navigation */}
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link to="/experiments/hello-world">
                  Hello, world (component)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/hello-world-props">
                  Hello, world (props)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/button-event">Event Handling</Link>
              </li>
              <li>
                <Link to="/experiments/minimal-state">Minimal State</Link>
              </li>
              <li>
                <Link to="/experiments/controlled-component">
                  State and Input
                </Link>
              </li>
              <li>
                <Link to="/experiments/controlled-component-class">
                  State and Input (class)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Display */}
        <div className="col">
          <Route path="/experiments/hello-world">
            <HelloWorld />
          </Route>
          <Route path="/experiments/hello-world-props">
            <HelloWorldProps message="Greetings (as a property)!" />
          </Route>
          <Route path="/experiments/button-event">
            <ButtonEvent />
          </Route>
          <Route path="/experiments/minimal-state">
            <MinimalState />
          </Route>
          <Route path="/experiments/controlled-component">
            <LiveGreeter />
          </Route>
          <Route path="/experiments/controlled-component-class">
            <LiveGreeterClass />
          </Route>
        </div>
      </div>
    </section>
  );
}
