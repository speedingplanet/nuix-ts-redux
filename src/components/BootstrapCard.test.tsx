import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BootstrapCard from './BootstrapCard';

/*
describe('message', () => {
  beforeAll(() => {}); // Once for the describe
  beforeEach(() => {}); // Runs once for each it/test
  it('message', () => {
    // actual test
    expect(1).toBeTruthy();
  })
  test('message', () => {
    // actual test
  })
  it('message', () => {
    // actual test
  })
  it('message', () => {
    // actual test
  })
  afterEach(() => {}); // after each it/test
  afterAll(() => {}); // after all tests
})

describe('MyComponent', () => {
  describe('some particular functionality, () => {});
  describe('other functionality, () => {});
  describe('yet other functionality, () => {});
})

*/

describe( 'BootstrapCard', () => {
  it( 'should render a title', () => {
    let testTitle = 'testTitle';
    let { getByText } = render(
      <BootstrapCard title={testTitle}>
        <p>Who cares</p>
      </BootstrapCard>,
    );
    const result = getByText( testTitle );
    expect( getByText( testTitle ) ).toBeInTheDocument();
    expect( result.textContent ).toMatch( new RegExp( testTitle ) );
  } );

  it( 'should render the right header level', () => {
    let { container } = render(
      <BootstrapCard title="whatever" titleLevel="2">
        <span>Whatever</span>
      </BootstrapCard>,
    );

    expect( container.querySelector( 'h2' ) ).not.toBeNull();
  } );

  it( 'should counter-test', () => {
    let testTitle = 'testTitle';
    let { queryByText } = render(
      <BootstrapCard title={testTitle}>
        <p>Who cares</p>
      </BootstrapCard>,
    );

    // Should work with an error-throwing function OTHER than getBy...
    // expect( getByText( 'whatever' ) ).toThrow();
    expect( queryByText( 'whatever' ) ).not.toBeInTheDocument();
    expect( queryByText( testTitle )?.textContent ).not.toMatch( /whatever/ );
  } );
} );
