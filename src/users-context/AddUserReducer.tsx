import { UserProfile } from '@speedingplanet/rest-server';
import React, { useReducer } from 'react';
import { UserAction, UserReducerFields } from '../users/user-types';

interface AddUserProps {
  createUser: ( user: UserProfile ) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Country {
  USA,
  CAN,
  UK,
  MX,
}

function reducer( state: UserProfile, action: UserAction ) {
  switch ( action.type ) {
  case 'displayName':
  case 'userType':
    return { ...state, [action.type]: action.payload };
  case 'street':
  case 'city':
  case 'state':
  case 'postalCode':
    return {
      ...state,
      address: { ...state.address, [action.type]: action.payload },
    };
  default:
    throw new Error( 'Missed case!' );
  }
}

const initialState: UserProfile = {
  displayName: '',
  userType: 'person',
  address: {
    street: '',
    city: '',
    state: '',
    postalCode: '',
  },
};

const actionCreator = ( type: UserReducerFields, payload: string ) => ( {
  type,
  payload,
} );

const AddUser = ( { createUser }: AddUserProps ): JSX.Element => {
  const [ state, dispatch ] = useReducer( reducer, initialState );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = ( event ) => {
    createUser( state );
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          name="displayName"
          value={state.displayName}
          onInput={( event ) =>
            // dispatch( actionCreator( 'displayName', event.currentTarget.value ) )
            dispatch( {
              type: 'displayName',
              payload: event.currentTarget.value,
            } )
          }
        />
      </div>
      <TextInput
        fieldValue={state.address.street}
        changeInput={( event ) =>
          dispatch( actionCreator( 'street', event.currentTarget.value ) )
        }
        label="Street"
        fieldName="street"
      />
      <TextInput
        fieldValue={state.address.city}
        changeInput={( event ) =>
          dispatch( actionCreator( 'city', event.currentTarget.value ) )
        }
        label="City"
        fieldName="city"
      />
      <TextInput
        fieldValue={state.address.state}
        changeInput={( event ) =>
          dispatch( actionCreator( 'state', event.currentTarget.value ) )
        }
        label="State"
        fieldName="state"
      />
      <TextInput
        fieldValue={state.address.postalCode}
        changeInput={( event ) =>
          dispatch( actionCreator( 'postalCode', event.currentTarget.value ) )
        }
        label="Postal Code"
        fieldName="postalCode"
      />
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={state.address.country}
          name="country"
          onChange={( event ) =>
            dispatch( actionCreator( 'country', event.currentTarget.value ) )
          }
        >
          <option value="">Choose a country</option>
          <option value="USA">United States</option>
          <option value="CAN">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="MX">Mexico</option>
        </select>
      </div>{' '}
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="person"
            value="person"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="person">
            Person
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="corporation"
            value="corporation"
          />
          <label className="form-check-label" htmlFor="corporation">
            Corporation
          </label>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-success" type="submit">
          Add User
        </button>
      </div>
    </form>
  );
};

interface TextInputProps {
  label: string;
  fieldName: string;
  fieldType?: string;
  fieldValue: string;
  changeInput: React.FormEventHandler<HTMLInputElement>;
}

const TextInput = ( {
  fieldName,
  fieldType,
  label,
  fieldValue,
  changeInput,
}: TextInputProps ) => {
  return (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={fieldType ?? 'text'}
        className="form-control"
        id={fieldName}
        name={fieldName}
        value={fieldValue}
        onInput={changeInput}
      />
    </div>
  );
};

export default AddUser;
