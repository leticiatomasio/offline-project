import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem, OrderResponse } from 'src/shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<OrderResponse[]> {
    return this.httpClient.get<OrderResponse[]>(`https://79kdqfqr-5007.brs.devtunnels.ms/order`);
  }

  create(order: OrderItem[]): Observable<any> {
    return this.httpClient.post(`https://79kdqfqr-5007.brs.devtunnels.ms/order`, order);
  }

}
