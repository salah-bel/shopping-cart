import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    {id : 1 , productId : 1, productName: 'test',qty : 4, price : 25, },
    {id : 2 , productId : 2, productName: 'test2',qty : 2, price : 200, },
    {id : 3 , productId : 3, productName: 'test3',qty : 6, price : 15, },
    {id : 4 , productId : 4, productName: 'test4',qty : 1, price : 250, }
  ];

  cartTotal = 0;
  
  constructor() { }

  ngOnInit() {  
    this.cartItems.forEach(item => {
     this.cartTotal += (item.price * item.qty)
    })
  }

}
