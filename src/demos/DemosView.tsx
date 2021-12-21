import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import ComponentCommunication from './ComponentCommunication';
import ComponentProps from './ComponentProps';
import ComponentState from './ComponentState';
import EffectHook from './EffectHook';
import EventHandling from './EventHandling';
import FormWidgets from './FormWidgets';
import ParentChildCommunication from './ParentChildCommunication';
import RenderList from './RenderList';
import ContextDemo from './ContextDemo';
import EffectExamples from './EffectExamples';
import AsyncEffect from './AsyncEffect';
import RoutingWithParams from './RoutingWithParams';
import ReduxContainerToolkit from './redux-counter-tk/ReduxContainer';
import ReduxContainerClassicAllInOne from './redux-counter-classic-aio/ReduxCounter';
import ReduxContainerClassic from './redux-counter-classic/ReduxContainer';
import TodosWrapper from './todos/todos-shared/TodosWrapper';
import TodosClassic from './todos/todos-classic/TodosClassic';
import TodosRTK from './todos/todos-rtk/TodosRTK';
import TodosAsyncRTK from './todos/todos-rtk-async/TodosAsyncRTK';

export default function DemosView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col text-center mb-2">
          <h2>Demos</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="list-unstyled">
            <li>
              <NavLink
                to="/demos/redux-counter-classic-aio"
                activeClassName="fw-bold"
              >
                Redux Counter (Classic, one file)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/redux-counter-classic"
                activeClassName="fw-bold"
              >
                Redux Counter (Classic)
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/redux-counter" activeClassName="fw-bold">
                Redux Counter (Toolkit)
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/todos/no-redux" activeClassName="fw-bold">
                Todos (no Redux)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/todos/classic-redux"
                activeClassName="fw-bold"
              >
                Todos (Classic Redux)
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/todos/rtk-redux" activeClassName="fw-bold">
                Todos (Redux Toolkit)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/todos/rtk-async-redux"
                activeClassName="fw-bold"
              >
                Todos (Redux Toolkit & Async)
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/event-handling" activeClassName="fw-bold">
                Event Handling
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/component-state" activeClassName="fw-bold">
                Component State
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/component-props" activeClassName="fw-bold">
                Component Props
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-communication"
                activeClassName="fw-bold"
              >
                Component Communication
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/effect-examples" activeClassName="fw-bold">
                Effect examples
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/effect-hook" activeClassName="fw-bold">
                Effect Hook
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/async-effect" activeClassName="fw-bold">
                Async Effect
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/form-widgets" activeClassName="fw-bold">
                Form Widgets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/parent-child-communication"
                activeClassName="fw-bold"
              >
                Parent-child communication
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/render-list" activeClassName="fw-bold">
                Rendering a list of data
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/context-demo" activeClassName="fw-bold">
                Context Demo
              </NavLink>
            </li>
            <li>
              <NavLink to="/demos/route-params" activeClassName="fw-bold">
                Route Parameters
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col">
          <Route path="/demos/todos/classic-redux">
            <TodosClassic />
          </Route>
          <Route path="/demos/todos/rtk-redux">
            <TodosRTK />
          </Route>
          <Route path="/demos/todos/rtk-async-redux">
            <TodosAsyncRTK />
          </Route>
          <Route path="/demos/todos/no-redux">
            <TodosWrapper />
          </Route>
          <Route path="/demos/redux-counter">
            <ReduxContainerToolkit />
          </Route>
          <Route path="/demos/redux-counter-classic">
            <ReduxContainerClassic />
          </Route>
          <Route path="/demos/redux-counter-classic-aio">
            <ReduxContainerClassicAllInOne />
          </Route>
          <Route path="/demos/event-handling">
            <EventHandling />
          </Route>
          <Route path="/demos/component-state">
            <ComponentState />
          </Route>
          <Route path="/demos/component-props">
            <ComponentProps />
          </Route>
          <Route path="/demos/component-communication">
            <ComponentCommunication />
          </Route>
          <Route path="/demos/effect-hook">
            <EffectHook />
          </Route>
          <Route path="/demos/effect-examples">
            <EffectExamples />
          </Route>
          <Route path="/demos/async-effect">
            <AsyncEffect />
          </Route>
          <Route path="/demos/form-widgets">
            <FormWidgets initialValue="Brinda" />
          </Route>
          <Route path="/demos/parent-child-communication">
            <ParentChildCommunication />
          </Route>
          <Route path="/demos/render-list">
            <RenderList />
          </Route>
          <Route path="/demos/context-demo">
            <ContextDemo />
          </Route>
          <Route path="/demos/route-params">
            <RoutingWithParams />
          </Route>
        </div>
      </div>
    </section>
  );
}
