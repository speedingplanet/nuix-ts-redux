/* eslint-disable @typescript-eslint/no-unused-vars */
// Intersection types are additive, not exclusive, like union types
// One or the other, not both
let stringOrNumber: string | number;

// What is this even?
let stringAndNumber: string & number;

// Intersection types combine types
export type TVehicle = {
  make: string;
  model: string;
};

type TCar = TVehicle & {
  numWheels: number;
};

// Similar to the way that interfaces extend each other
export interface IVehicle {
  make: string;
  model: string;
}

interface ICar extends IVehicle {
  numWheels: number;
}
