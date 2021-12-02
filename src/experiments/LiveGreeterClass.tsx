import React, { Component } from 'react';

interface LiveGreeterClassState {
  name: string;
  city: string;
}

export class LiveGreeterClass extends Component<{}, LiveGreeterClassState> {
  state = { name: '', city: 'New York' };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor( props: never ) {
    super( props );
    // this.state = { name: '' };
    this.boundHandleUpdate = this.boundHandleUpdate.bind( this );

    // Or just create it as a property
    // this.handleUpdateAsProperty = this.boundHandleUpdate( this );
  }

  boundHandleUpdate( event: React.FormEvent<HTMLInputElement> ): void {
    this.setState( { name: event.currentTarget.value } );
  }

  handleUpdate = ( event: React.FormEvent<HTMLInputElement> ): void => {
    // console.log( 'Value in the form: ', event.currentTarget.value );
    this.setState( { name: event.currentTarget.value } );
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="your-name">Enter your name:</label>
        <input
          type="text"
          id="your-name"
          className="form-control"
          onInput={this.boundHandleUpdate}
          value={this.state.name}
        />
        {this.state.name.length >= 2
          ? (
            <p>Greetings, {this.state.name}</p>
          )
          : (
            <p></p>
          )}
      </div>
    );
  }
}

export default LiveGreeterClass;
