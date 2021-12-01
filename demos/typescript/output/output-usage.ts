import * as CarTypes from './output-types';

let toyota: CarTypes.ICar = {
  make: 'Toyota',
  model: 'Celica',
};

console.log( 'Toyota:', toyota );

let ford: CarTypes.TCar = {
  make: 'Ford',
  model: 'Mustang',
};

console.log( 'Ford:', ford );

let honda = new CarTypes.CarClass( 'Honda', 'Civic' );

console.log( 'Honda:', honda );
