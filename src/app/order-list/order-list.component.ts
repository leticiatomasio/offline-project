import { Component, OnInit } from '@angular/core';
import { OrderResponse } from './../../shared/models/order.model';
import { OrderService } from 'src/shared/services/order/order.service';
import { SignalRService } from 'src/shared/services/signal-r/signal-r.service';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: OrderResponse[];

  constructor(
    private orderService: OrderService,
    private signalR: SignalRService
  ) { }

  ngOnInit() {
    this.startSignalRConnection();
    this.watchForNotification();
    this.getOrders().subscribe(res => this.orders = res);
  }

  private startSignalRConnection() {
    this.signalR.startConnection();
  }

  private watchForNotification() {
    this.signalR.emitSignalRNotification$.pipe(
      switchMap(res => this.getOrders()),
      tap(orders => this.orders = orders)
    ).subscribe();
  }

  private getOrders(): Observable<OrderResponse[]> {
    return this.orderService.getAll();
  }
}
