/* eslint-disable @typescript-eslint/array-type */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function map<T extends Array<K>, K>(
  array: T,
  mapper: ( item: K ) => K,
): Array<K> {
  let results: Array<K> = [];
  array.forEach( ( el ) => results.push( mapper( el ) ) );
  return results;
}

function betterMap<T extends Array<unknown>>(
  array: T,
  mapper: ( item: T[number] ) => T[number],
): Array<T[number]> {
  let results: Array<T[number]> = [];
  array.forEach( ( el ) => results.push( mapper( el ) ) );
  return results;
}

let names = [ 'John', 'Dan', 'Tim' ];
// let uppercase = map<string[], string>( names, ( name ) => name.toUpperCase() );
let uppercase = betterMap<string[]>( names, ( name ) => name.toUpperCase() );
console.log( 'uppercase:', uppercase );
