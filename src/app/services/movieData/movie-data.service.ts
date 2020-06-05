import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';
import IMovieDataService from './IMovieDataService';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService implements IMovieDataService {

  constructor(private http: HttpClient) { }

  productList: Subject<Product[]> = new Subject<Product[]>();

  getMovies(): void {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {
      const moviesFromOmdb: Product[] = data.map(movie => {
        const ourOwnMovieObject = new Product();
        ourOwnMovieObject.productName = movie.name;
        ourOwnMovieObject.productId = movie.id;
        ourOwnMovieObject.productPrice = movie.price;
        ourOwnMovieObject.productImage = movie.imageUrl;
        ourOwnMovieObject.description = movie.description;
        ourOwnMovieObject.releaseYear = movie.year;
        ourOwnMovieObject.productCategory = movie.productCategory;
        return ourOwnMovieObject;
      });
      this.productList.next(moviesFromOmdb);
    });

  }

  // getOneMovie(id: Product) {
  //   console.log(this.productList, id);
  //   return this.productList;
  // }


}
