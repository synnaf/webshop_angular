import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';
  // vilka funktioner vi vill använda
  // egenskaper och dess datatyper, inga tilldelningar!
export default interface IMovieDataService {
  productList: Subject<Product[]>;
  getMovies(): void;
}
