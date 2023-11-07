import { Component, OnInit } from '@angular/core';
import { OrderResponse } from './../../shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: OrderResponse[] = [
    {
      number: '0001',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
    {
      number: '0002',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
    {
      number: '0003',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
    {
      number: '0004',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
    {
      number: '0005',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
    {
      number: '0006',
      items: [
        {
          name: 'Hambúrguer',
          quantity: 1
        },
        {
          name: 'Refrigerante',
          quantity: 1
        },
        {
          name: 'Batata',
          quantity: 2
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
