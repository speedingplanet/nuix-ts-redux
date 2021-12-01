/* eslint-disable @typescript-eslint/no-unused-vars */

// Explicitly typed
let nameExplicit: string = 'John';

// Implicitly typed
let nameImplicit = 'John';

// Primitive types: string, number, boolean
// Object types depend on tsconfig, but include Date, et al

// Also custom object types
const person: { firstName: string; lastName: string } = {
  firstName: 'John',
  lastName: 'Paxton',
};

// Typing functions
function add( x: number, y: number ): number {
  return x + y;
}

// More on 'type' soon
type SubtractFunction = ( a: number, b: number ) => number;
const subtract: SubtractFunction = ( x, y ) => x + y;

export {};
