import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsListe: Product[];
  wishlist: any[];

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.loadProductList();
    this.loadWishList();
  }
  // load product list
  loadProductList() {
    this.productService.getProduct().subscribe(products => {
      this.productsListe = products;
      
    });
  }

  // load wishlist
  loadWishList() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds;
    });
  }
}
