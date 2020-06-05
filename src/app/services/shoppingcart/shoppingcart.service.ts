import { Injectable } from '@angular/core';
import IShoppingcartService from './IShoppingcartService';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})

export class ShoppingcartService implements IShoppingcartService {
  // en tom array som är current items in cart
  cartList: Product[] = [];

  // en metod som lägger till en produkt i listan
  addToCart(product) {
    this.cartList.push(product);

  }

  // en metod som returnerar listam
  getItems() {
    return this.cartList;
  }

  // en metod som tömmer listan och uppdaterar den
  clearCart() {
    this.cartList = [];
    return this.cartList;
  }

  constructor() { }


}
