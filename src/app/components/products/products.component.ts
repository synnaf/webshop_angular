import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // visible: boolean = true;
  // @Input() open: Product;
  // @Output() close: EventEmitter<any> = new EventEmitter();


  productList: Product[] = [];

  constructor(
    private service: MovieDataService,
    private cartService: ShoppingcartService
  ) { }

  ngOnInit(): void {
    this.service.movies.subscribe((movie: Product[]) => {
      this.productList = movie;
    });
    this.service.getMovies();
  }

  // använder metoden som finns i vår service.
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to cart!');
  }

// jag vill kunna se detaljer, detta bör skickas till min child productDetails
  toggleDetails() {

    console.log("toggle details");
  //   this.visible = !this.visible;
  //   if (this.visible) {
  //     this.open.productPrice;
  //   } else {
  //     this.close.emit(e);
  //   }
  }

}


// det jag vill ska hända:
/*
1. användaren klickar på köp
2. movieSource uppdateras (movieSource)
3. publishedMovie får ett nytt värde
4. Subscribe får ett nytt värde

*/
