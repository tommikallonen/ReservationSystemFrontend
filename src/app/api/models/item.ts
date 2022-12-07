/* tslint:disable */
/* eslint-disable */
import { Image } from './image';
import { User } from './user';
export interface Item {
  accessCount?: number;
  description?: null | string;
  id?: number;
  images?: null | Array<Image>;
  name?: null | string;
  owner?: User;
}
