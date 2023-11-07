import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() foodList = [
    {
      name: 'Hambúrguer',
      price: 11.99,
      quantity: 1
    },
    {
      name: 'Batata frita',
      price: 6.99,
      quantity: 1
    },
    {
      name: 'Refrigerante',
      price: 5,
      quantity: 1
    },
    {
      name: 'Cachorro quente',
      price: 11.99,
      quantity: 1
    },
    {
      name: 'Coxinha',
      price: 6,
      quantity: 1
    },
  ];

  orderPrice: number = 0;

  cartItems: any[] = [];

  constructor() { }

  ngOnInit() {}

  addItemToCart(item: any) {
    const i = this.cartItems.findIndex(obj => obj.name === item.name);

    if(i >= 0) {
      this.cartItems[i].quantity = this.cartItems[i].quantity + item.quantity;
      this.cartItems[i].price = this.cartItems[i].price + item.price;
    } else {
      this.cartItems.push(structuredClone(item));
    }

    this.orderPrice = this.orderPrice + item.price;
  }

  sendOrder() {
    const order = {
      items: this.cartItems
    }
    this.cartItems = [];
  }
}
