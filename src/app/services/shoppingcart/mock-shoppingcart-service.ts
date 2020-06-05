import IShoppingcartService from './IShoppingcartService';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';


export class MockShoppingcartService implements IShoppingcartService{
  cartList: Product[] = [
    {productName: 'Movie test 1', productId: 22, productPrice: 100, productImage: 'google.se', productCategory: 'x'},
    {productName: 'Movie test 2', productId: 20, productPrice: 120, productImage: 'google.se', productCategory: 'x'},
    {productName: 'Movie test', productId: 21, productPrice: 140, productImage: 'google.se', productCategory: 'x'},
    {productName: 'Movie again', productId: 29, productPrice: 190, productImage: 'google.se', productCategory: 'x'}
  ];

  addToCart(): void {
    this.cartList.push({productName: 'New Movie', productId: 29, productPrice: 190, productImage: 'google.se', productCategory: 'x'});

    // Logik som ser till att man ej lägger till dubletter?
    // if() {

    // } else {

    // }

  }

  getItems() {
    return this.cartList;
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }


}
