import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from '../../config/api';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

   

  constructor( private http: HttpClient ) { }

  
  getProduct():Observable<Product[]>{  // return array type Product
     return this.http.get<Product[]>(productsUrl);
  }
}

