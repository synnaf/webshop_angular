import { Product } from './Product';
import { Customer } from './Customer';

export class Order {
  orderId: string;
  products: Product;
  customer: Customer;
}
