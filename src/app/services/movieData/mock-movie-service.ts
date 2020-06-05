import IMovieDataService from './IMovieDataService';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';

export class MockMovieDataService implements IMovieDataService {
  private testMovies: Product[] = [
    { productName: 'Star Wars 1', productId: 91, productPrice: 100, productImage: 'www.google.se', productCategory: 'x'},
    { productName: 'Star Wars 2', productId: 92, productPrice: 99, productImage: 'www.google.se', productCategory: 'x'},
    { productName: 'Star Wars 3', productId: 93, productPrice: 22, productImage: 'www.google.se', productCategory: 'x'},
  ];

  productList: Subject<Product[]> = new Subject<Product[]>();

  getMovies(): void {
    this.productList.next(this.testMovies);
  }

}
