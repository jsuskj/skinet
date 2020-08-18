import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProducts(brandId?: number, typeId?: number) {
    let params = new HttpParams();

    if (brandId) {
      params.append('brandId', brandId.toString());
      
      console.log(brandId.toString());
    }

    if (typeId) {
      params.append('typeId', typeId.toString());
    }


    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
            .pipe(
               map(response =>  {
                return response.body;  // IPagination object
              })
            );
    }

  // tslint:disable-next-line: typedef
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  // tslint:disable-next-line: typedef
  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}