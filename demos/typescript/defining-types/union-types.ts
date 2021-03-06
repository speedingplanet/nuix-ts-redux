/* eslint-disable @typescript-eslint/no-unused-vars */
// Union types can be this or that
let stringOrNumber: string | number;

function getStringOrNumber(): string | number {
  return Date.now() % 2 ? '1' : 1;
}

stringOrNumber = getStringOrNumber();

// But you must be careful about how you use them
function subtract( x: number, y: number ): number {
  return x - y;
}

// Error
// subtract( 10, stringOrNumber );

function betterSubtract( x: number, y: number | string ) {
  // Type guard, also called "narrowing"
  if ( typeof y === 'string' ) {
    y = Number( y );
  }

  return x - y;
}

betterSubtract( 10, stringOrNumber );

// Type guards can also use instanceof, as well as "in"
// Narrow by truthiness if one of the values is boolean false (undefined, 0, null, etc)
// Narrow by equality in some cases as well:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing

interface Foo {
  commonProp: string;
  foo: string;
}

interface Bar {
  commonProp: string;
  bar: number;
}

// This is called a discriminated union
type FooBar = Foo | Bar;

function handleFooBar( fooBar: Foo | Bar ) {
  // Can access, because commonProp is on both
  console.log( 'commonProp:', fooBar.commonProp );

  // Errors, because we don't know if foo or bar is present
  // console.log( 'foo', fooBar.foo );
  // console.log( 'bar', fooBar.bar );

  // Works, type guard
  if ( 'foo' in fooBar ) {
    // if ( ( fooBar as Foo ).foo ) {
    // FooBar is not an actual JavaScript value, so you can't compare to it
    // if ( fooBar instanceof FooBar ) {
    // Or destructure using 'as'
    const { foo } = fooBar;
    console.log( 'foo', foo );
  }
}

type SortDirection = 'ascending' | 'descending';
type SortFields = 'firstName' | 'lastName' | 'city' | 'state';

enum EnumeratedSortFields {
  FIRSTNAME = 'firstName',
  LASTNAME = 'lastName',
  CITY = 'city',
  STATE = 'state',
}

function doSomething( union: SortFields, enm: EnumeratedSortFields ) {
  console.log( 'Sort value:', union, enm );
}

doSomething( 'firstName', EnumeratedSortFields.LASTNAME );

export {};
