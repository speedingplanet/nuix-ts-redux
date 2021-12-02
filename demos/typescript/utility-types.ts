/* eslint-disable @typescript-eslint/no-unused-vars */

// Utility types docs: https://www.typescriptlang.org/docs/handbook/utility-types.html

export type Person = {
  firstName: string;
  lastName: string;
  address: string | null;
  dateOfBirth: string | Date | undefined;
};

// Partial
// firstName and lastName are now optional
type PartialPerson = Partial<Person>;

// Required
// the opposite, make all optional props required
type RequiredPerson = Required<PartialPerson>;

// Readonly
// All props can now only be read, not set
type ReadOnlyPerson = Readonly<Person>;

// NonNullable
// null and undefined are removed as options in unions
// Does NOT operate on types with properties, but rather on union types
// Yes
type UnionWithoutNulls = NonNullable<
string | null | number | undefined | boolean
>;

// No
type ObjectWithNulls = {
  prop1: string | null;
  prop2: number | undefined;
  prop3: NonNullable<string | null | number>;
};

// Not what you think it is
type ObjectWithoutNulls = NonNullable<ObjectWithNulls>;

// Record<K, V>
// An object with props K with each value V
type PropsType = 'foo' | 'bar' | 'baz';
type PropsValue = { order: number; meaning: string };

let propsAndValues: Record<PropsType, PropsValue> = {
  foo: {
    meaning: 'whatever',
    order: 1,
  },
  bar: {
    meaning: 'whatever',
    order: 2,
  },
  baz: {
    meaning: 'whatever',
    order: 3,
  },
};

// Shines with enums and keyof
enum Days {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
}

type WeeklyCalendar = Record<Days, { class: string; client: string }>;

type PersonDescriptor = Record<
keyof Person,
{ description: string; required: boolean }
>;

// Pick<type, props>
// Person with only firstName and lastName
type NamedPerson = Pick<Person, 'firstName' | 'lastName'>;

// Omit<type, props>
type NoWeekendsCalendar = Omit<WeeklyCalendar, 'SATURDAY' | 'SUNDAY'>;

// Extract<type, union>
// Pick for a union
type Weekends = Extract<Days, 'SATURDAY' | 'SUNDAY'>;

// Exclude<type, union>
// Omit for a union
type Weekdays = Exclude<Days, 'SATURDAY' | 'SUNDAY'>;

// Parameters (also ConstructorParameters)
// Get the parameters of a function as a _tuple_ type
type BinaryOperator = ( x: number, y: number ) => number;
type BinaryOperatorParameters = Parameters<BinaryOperator>;

// ReturnType
// Get the return type of a function
// Handy for keeping values in sync across files
type BinaryOperatorReturn = ReturnType<BinaryOperator>;
