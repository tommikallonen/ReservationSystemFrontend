/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface Item {
  description?: null | string;
  id?: number;
  image?: null | string;
  name: string;
  owner?: User;
}
