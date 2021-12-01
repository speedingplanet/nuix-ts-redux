// Different ways that TypeScript outputs types (or not!)

export interface ICar {
  make: string;
  model: string;
}

export type TCar = {
  make: string;
  model: string;
};

export class CarClass {
  make: string;
  model: string;

  constructor( make: string, model: string ) {
    this.make = make;
    this.model = model;
  }

  toString() {
    return this.make + ' ' + this.model;
  }
}

export enum CarMakes {
  Honda,
  Ford,
  Dodge,
  Mercedes,
  Jaguar,
  Pontiac,
}

export enum HondaModels {
  CIVIC = 'Civic',
  ACCORD = 'Accord',
  CRV = 'CR-V',
  PILOT = 'Pilot',
  FIT = 'Fit',
}
