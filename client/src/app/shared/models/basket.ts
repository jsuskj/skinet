import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
    id: string;
    items: IBasketItem[];
  }

  /*
  Compare with IProduct from '../shared/models/product' => 
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
*/

  export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
  }

  // tslint:disable-next-line: align
  export class Basket implements IBasket {
    id = uuidv4();
    items: IBasketItem[] = [];
  }
  
export interface IBasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}