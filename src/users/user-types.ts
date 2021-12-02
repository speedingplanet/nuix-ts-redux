import { Address, UserProfile } from '@speedingplanet/rest-server';

export type UserReducerFields =
  | keyof Omit<UserProfile, 'address'>
  | keyof Address;
export interface UserAction {
  type: UserReducerFields;
  payload: string;
}
