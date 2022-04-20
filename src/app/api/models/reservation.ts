/* tslint:disable */
/* eslint-disable */
import { Item } from './item';
import { User } from './user';
export interface Reservation {
  end?: string;
  id?: number;
  owner?: User;
  start?: string;
  target?: Item;
}
