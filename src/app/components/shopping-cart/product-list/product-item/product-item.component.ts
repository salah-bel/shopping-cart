import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../../../models/product';
import { MessengerService } from '../../../../services/messenger.service';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;

  constructor(
    private messengerService: MessengerService,
    private cartService: CartService,
    private wishService : WishlistService
  ) { }

  ngOnInit(): void {
  }

  // send productItem to the cart 
  onClickAddProductToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.messengerService.sendMessage(this.productItem);
      
    })
  }
  // add to wishlist
  onClickAddToWishlist() {
    this.wishService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
      });
  }
  // remove from wishlist
  onClickRmoveFromWishlist() {
    this.wishService.removeToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false
    })
  }

  

}
