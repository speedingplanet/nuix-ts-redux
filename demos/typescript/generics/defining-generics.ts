// Generic interface
export interface Wrapper<T> {
  add: ( item: T ) => void;
  retrieveAll: () => T[];
}

// Generic function
export function clone<T extends object>( arg: T ): T {
  return { ...arg };
}

// Generic class
export class Dao<T> {
  fetchAll(): T[] {
    return [];
  }

  update( item: T ): void {
    // Do something to push T to the remote API
  }
}
