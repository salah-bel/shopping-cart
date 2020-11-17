import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessengerService } from '../../../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;
  constructor( private messengerService: MessengerService) { }

  ngOnInit(): void {
  }

  // send productItem to the cart 
  AddProductToCart() {
     this.messengerService.sendMessage(this.productItem);
  }

}
