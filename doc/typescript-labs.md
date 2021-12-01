# TypeScript Labs

## Setup

Create a folder called "typescript" under the "labs" folder. Do all your work in that folder.

## Lab 1: Introduction to types

Build out a `ZipPayRecord` interface. It should have the following fields and types

- id / string
- version / number
- lastUpdated / string
- active / boolean

## Lab 2: Type modifiers

Build out an Address type. It should have the following fields and types

- street / string
- city / string
- state / string
- postalCode / string
- country / optional / string

Update `ZipPayRecord` so that the ID property is readonly

## Lab 3: Union types

### Part 1: Using a union type
Update `ZipPayRecord` so that `lastUpdated` can be a string or a Date

### Part 2: Unions as enums

Set up the following union types

UserType, can be a corporation or a person
TransactionType, can be a payment or a charge
TransactionStatus, can be settled or open
VisibilityType, can be public or private

Update `ZipPayRecord` so that `lastUpdated` can be 

### Part 3: Using a union enum

Build a `User` type with the following properties
- displayName / string
- payeeId / string
- email / string
- userType / UserType
- picture / A sub-type which has values 'large', 'medium' and 'thumbnail' each of which can be a string
- address / Address

## Lab 4: Intersections or extensions

### Part 1: Minimal extension

The `User` type should inherit from the `ZipPayRecord` type. You can use either interfaces or types. 

### Part 2: From the ground up

Build a Transaction type which inherits from ZipPayRecord and has the following properties and types:

- payorId / string
- payeeId / string
- txDate / string or Date
- txType / TransactionType
- txStatus / TransactionStatus
- reason / string
- visibility / VisibilityTypes

