import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrderToCreate } from '../shared/models/order';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.apiUrl;  //'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }

  
  createOrder(order: IOrderToCreate) {
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods'); //.pipe(
      //map((dm: IDeliveryMethod[]) => { return dm.sort((a, b) => b.price - a.price); })
    //)
  }

}