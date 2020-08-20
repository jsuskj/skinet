import { IProduct } from './product';

export interface IPagination
{
  [x: string]: any;
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IProduct[];
}
