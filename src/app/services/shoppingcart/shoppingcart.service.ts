import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  // en tom array som är current items in cart
  cartList = [];

  // en metod som lägger till en produkt i listan
  addToCart(product) {
    this.cartList.push(product);

    // skriv mer logik härinne så att den inte lägger till dubletter,
    // gör det genom testningen
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


  // private movieSource = new Subject<Product>();

  constructor() { }

    // movieToAdd = this.movieSource.asObservable();
    // addInCart(movieToPublish: Product) {
    //   this.movieSource.next(movieToPublish);
    //   // här är onjektet som ska skickas vidare
    // }


}
