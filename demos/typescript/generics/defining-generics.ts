// Generic interface
export interface Wrapper<T> {
  add: ( item: T ) => void;
  retrieveAll: () => T[];
}

// Generic class
export class Dao<T> {
  async fetchAll(): Promise<T[]> {
    return Promise.resolve( [] );
  }

  update( item: T ): void {
    // Do something to push T to the remote API
  }
}

// Generic function
export function shallowClone<T extends object>( arg: T ): T {
  return { ...arg };
}
