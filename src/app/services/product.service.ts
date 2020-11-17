import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'product1', 'this is the product 1 comming from the space or alilou express or other', 200, 'https://loremflickr.com/320/240?random=1' ),
    new Product(2, 'product2', 'this is the product 2 comming from the space or alilou express or other', 100, 'https://loremflickr.com/320/240?random=2' ),
    new Product(3, 'product3', 'this is the product 3 comming from the space or alilou express or other', 300, 'https://loremflickr.com/320/240?random=3' ),
    new Product(4, 'product4', 'this is the product 4 comming from the space or alilou express or other', 220, 'https://loremflickr.com/320/240?random=4' ),
    new Product(5, 'product5', 'this is the product 5 comming from the space or alilou express or other', 278, 'https://loremflickr.com/320/240?random=5' ),
    new Product(6, 'product6', 'this is the product 6 comming from the space or alilou express or other', 250, 'https://loremflickr.com/320/240?random=6' ),
    new Product(7, 'product7', 'this is the product 7 comming from the space or alilou express or other', 230, 'https://loremflickr.com/320/240?random=7' )
  ]

constructor() { }

  
  getProduct():Product[] { // return array type Product
  return this.products;
  }
}

