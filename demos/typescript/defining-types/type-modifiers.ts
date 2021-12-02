// Optional and readonly
export interface ICar {
  make: string;
  model: string;
  year?: string; // optional
  color: string | undefined; // optional as a union type
  readonly vin: number; // read-only, unmodifiable
}

// Index signatures
// keys have to be strings or numbers
export interface Extensible {
  // [k: string]: string | number;
  // [k: number]: string | number;
  // [k: string | number]: string | number | boolean | Array<unknown> | object;
  [k: string | number]: string | number | boolean | unknown[] | object;
  someRequiredString: string;
  // Arbitrary other props, but they must be strings!
  // [otherProps: string]: string;
  // This causes errors, though
  someRequiredNumber: number;
  // Possible fix
  // [otherProps: string]: string | number;
}
