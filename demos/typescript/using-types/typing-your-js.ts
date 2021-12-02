/* eslint-disable @typescript-eslint/no-unused-vars */

// Explicitly typed
let nameExplicit: string = 'John';

// Implicitly typed
let nameImplicit = 'John';

// Primitive types: string, number, boolean, null, undefined
// Object types depend on tsconfig, but include Date, et al
let today = new Date();

// Also custom object types
const person: { firstName: string; lastName: string } = {
  firstName: 'John',
  lastName: 'Paxton',
};

const book: { author: string; title: string } = {
  author: 'F. Scott Fitzgerald',
  title: 'The Great Gatsby',
};

// Typing functions
function add( x: number, y: number ): number {
  return x + y;
}

const addExpression = function( x: number, y: number ): number {
  return x + y;
};

// More on 'type' soon
type SubtractFunction = ( a: number, b: number ) => number;
const subtract: SubtractFunction = ( x, y ) => x + y;

// Cheating or opting out: any and unknown
let someValue: any = 'John';
someValue = 10;
someValue = new Date();
someValue = { foo: 'bar' };

// let someOtherValue: number = someValue;
let someOtherValue: number = 10;

let uValue: unknown = 'John';
/*
uValue = someOtherValue;
uValue = { foo: 'bar' };

someOtherValue = uValue;
*/

// let stringValue: string = uValue;
let stringValue: string;

/*
if ( typeof uValue === 'object' && 'length' in uValue ) {
  stringValue = uValue;
}
*/

if ( typeof uValue === 'string' ) {
  stringValue = uValue;
}

let unknownDate: unknown = new Date();
let knownDate: Date;
if ( unknownDate instanceof Date ) {
  knownDate = unknownDate;
}

function betterAdd(
  x: string | number,
  y: string | number,
): string | number | undefined {
  if ( typeof x === 'string' && typeof y === 'string' ) {
    return x + y;
  } else if ( typeof x === 'number' && typeof y === 'number' ) {
    return x + y;
  }

  // return Number( x ) + Number( y );
}

/*
type add1 = ( x: number, y: number ) => number;
type add1 = ( x: string, y: number ) => number;
type add1 = ( x: number, y: string ) => number;
type add1 = ( x: string, y: string ) => number;
*/

// let otherValue: number = uValue;
// let otherUValue: unknown = uValue;

export {};
