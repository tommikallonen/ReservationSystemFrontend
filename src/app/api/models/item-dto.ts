/* tslint:disable */
/* eslint-disable */
import { ImageDto } from './image-dto';
export interface ItemDto {
  description?: null | string;
  id?: number;
  images?: null | Array<ImageDto>;
  name: string;
  owner: string;
}
