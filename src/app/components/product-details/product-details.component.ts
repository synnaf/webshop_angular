import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  selectedMovie: Product;
  movies: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MovieDataService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.service.productList.subscribe((m: Product[]) => {
        this.selectedMovie = m.find((movie: Product) => movie.productId == this.id);
        console.log(this.selectedMovie);
      });

    this.service.getMovies();
    }
}
