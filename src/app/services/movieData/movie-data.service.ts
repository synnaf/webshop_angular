import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';



@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  movies = new Subject<Product[]>();

  constructor(private http: HttpClient) { }

  getMovies() {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {

      const moviesFromOmdb: Product[] = data.map(movie => {
        const ourOwnMovieObject = new Product();
        ourOwnMovieObject.productName = movie.name;
        ourOwnMovieObject.productId = movie.id;
        ourOwnMovieObject.productPrice = movie.price;
        ourOwnMovieObject.productImage = movie.imageUrl;
        ourOwnMovieObject.productCategory = movie.productCategory;
        return ourOwnMovieObject;
      });

      this.movies.next(moviesFromOmdb);
    });
  }


}
