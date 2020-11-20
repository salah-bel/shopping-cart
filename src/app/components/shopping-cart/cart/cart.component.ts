import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  constructor(
    private messengerService: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  // Gestion des données
  handleSubscription() {
    // get the product comming from productItem
    this.messengerService.getMessage().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalCart();  
    });
  }

 // calculate the sum of the cart
  calculateTotalCart() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += (item.price * item.qty);
    });
  }
}
