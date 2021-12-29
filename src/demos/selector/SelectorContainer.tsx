import React from 'react';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  connect,
} from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

type SelectorState = {
  parent: {
    parentValue: number;
    parentRef: { text: string };
    child: {
      childValue: number;
      childRef: { text: string };
      grandchild: {
        grandchildValue: number;
        grandchildRef: { text: string };
      };
    };
  };
};

const initialState: SelectorState = {
  parent: {
    parentValue: 1,
    parentRef: {
      text: 'parent',
    },
    child: {
      childValue: 10,
      childRef: {
        text: 'child',
      },
      grandchild: {
        grandchildValue: 100,
        grandchildRef: {
          text: 'grandchild',
        },
      },
    },
  },
};

const selectorSlice = createSlice( {
  name: 'selector',
  initialState,
  reducers: {
    changeParentState( state ) {
      state.parent.parentValue += 1;
      state.parent.parentRef.text = `parent updated ${state.parent.parentValue}`;
    },
    changeChildState( state ) {
      state.parent.child.childValue += 10;
      state.parent.child.childRef.text = `child updated ${state.parent.child.childValue}`;
    },
  },
} );

const store = configureStore( {
  reducer: selectorSlice.reducer,
  devTools: { name: 'Selector Demo' },
} );

const { changeParentState, changeChildState } = selectorSlice.actions;

export type SelectorDispatch = typeof store.dispatch;
export const useSelectorDispatch = () => useDispatch<SelectorDispatch>();
export const useAppSelector: TypedUseSelectorHook<SelectorState> = useSelector;

const SelectorContainer = () => {
  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  );
};

const LastRendered = () => {
  return <p>Last rendered: {Date.now()}</p>;
};

interface GrandchildProps {
  grandchildValue: number;
  grandchildRef: { text: string };
}

/*
interface ChildProps {
  childValue: number;
  childRef: { text: string };
  grandchild: GrandchildProps;
}
*/

const Parent = () => {
  const dispatch = useSelectorDispatch();
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Parent</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Update parent props</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch( changeParentState() )}
          >
            Update Parent
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            onClick={() => dispatch( changeChildState() )}
          >
            Update Child
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* <ChildNoSelector /> */}
          <ChildSelector />
        </div>
      </div>
    </>
  );
};

const ChildSelector = () => {
  const value = useAppSelector( ( state ) => {
    return state.parent.child.childValue;
  } );
  const ref = useAppSelector( ( state ) => {
    return state.parent.child.childRef;
  } );

  const grandchildValue = useAppSelector(
    ( state ) => state.parent.child.grandchild.grandchildValue,
  );
  const grandchildRef = useAppSelector(
    ( state ) => state.parent.child.grandchild.grandchildRef,
  );

  return (
    <div>
      <h4>Child</h4>
      <p>Value: {value}</p>
      <p>Ref: {ref.text}</p>
      <LastRendered />
      <div className="row">
        <div className="col">
          <GrandchildSelector
            grandchildRef={grandchildRef}
            grandchildValue={grandchildValue}
          />
        </div>
        <div className="col">
          <GrandchildNoSelectorRedux />
        </div>
      </div>
    </div>
  );
};

/*
let ChildNoSelector = ( { childValue, childRef, grandchild }: ChildProps ) => {
  return (
    <div>
      <h4>Child</h4>
      <p>Value: {childValue}</p>
      <p>Ref: {childRef.text}</p>
      <LastRendered />
      <div className="row">
        <div className="col">
          <GrandchildSelector />
        </div>
        <div className="col">
          <GrandchildNoSelector value={grandchild.value} ref={grandchild.ref} />
        </div>
      </div>
    </div>
  );
};

const mapChildStateToProps = ( state: SelectorState ) => {
  return {};
};
*/

const GrandchildSelector = ( {
  grandchildValue,
  grandchildRef,
}: GrandchildProps ) => {
  return (
    <div style={{ border: '2px solid green' }}>
      <h5>
        Grandchild <em>with</em> selector
      </h5>
      <p>Value: {grandchildValue}</p>
      <p>Ref: {grandchildRef.text}</p>
      <LastRendered />
    </div>
  );
};

let GrandchildNoSelector = ( {
  grandchildValue,
  grandchildRef,
}: GrandchildProps ) => {
  return (
    <div>
      <h5>Grandchild with no selector</h5>
      <p>Value: {grandchildValue}</p>
      <p>Ref: {grandchildRef.text}</p>
      <LastRendered />
    </div>
  );
};

const mapGrandchildStateToProps = ( state: SelectorState ) => ( {
  grandchildValue: state.parent.child.grandchild.grandchildValue,
  grandchildRef: state.parent.child.grandchild.grandchildRef,
} );

let GrandchildNoSelectorRedux = connect( mapGrandchildStateToProps )(
  GrandchildNoSelector,
);

export default SelectorContainer;
