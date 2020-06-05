import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';

export default interface IShoppingcartService {
  cartList: Product[];
  addToCart(Product): void;
  getItems(): void;
  clearCart(): void;
}
