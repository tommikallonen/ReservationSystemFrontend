/* tslint:disable */
/* eslint-disable */
import { Item } from './item';
import { User } from './user';
export interface Reservation {
  endTime?: string;
  id?: number;
  owner?: User;
  startTime?: string;
  target?: Item;
}
