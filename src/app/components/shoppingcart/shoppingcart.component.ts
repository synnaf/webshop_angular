import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  // vi definierar items-egenskapen där vi förvarar produkterna
  cartItems;

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {
    // här ger vi värdet till items genom vår service-metod getItems
    this.cartItems = this.cartService.getItems();

  }

}
