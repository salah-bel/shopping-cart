import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsListe: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit()  {
    this.productService.getProduct().subscribe((products) => {
        this.productsListe = products
    })
  }

  

}
