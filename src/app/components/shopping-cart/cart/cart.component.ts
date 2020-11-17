import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  product: Product;

  constructor(private messengerService: MessengerService) {}

  ngOnInit() {
    // get the product comming from productItem
    this.messengerService.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product) {
    // show onely one item by row in cart block
    let productExist = false;
    for (let i in this.cartItems) {
      // if and id of product exist in the cart block increment the quantity and the productExist  became true
      if ( this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExist = true;
      }
    }
  // if the productExist == false push the product in the cart array
  if (!productExist) {
       // Push products on cart
       this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
      });
    }
          // calculate the sum of the cart
          this.cartTotal = 0;
          this.cartItems.forEach((item) => {
            this.cartTotal += item.price * item.qty;
          });
        
  }
  
}
