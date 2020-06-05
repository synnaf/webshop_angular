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

  constructor(
    private service: MovieDataService,
    private cartService: ShoppingcartService
  ) { }

  productList: Product[] = [];

  ngOnInit(): void {
    // detta är det som ska hända innan funktionen hämtar datan på rad 34
    // prenumerera på subjektet movies,
    this.service.productList.subscribe((movie: Product[]) => {
      // när anropet gjorts, uppdatera listan
      this.productList = movie;
    });
    // kör funktionen som hämtar datan och uppdaterar productList
    // denna händelse skulle man kunna koppla till en click-event
    this.service.getMovies();
  }

  // använder metoden som finns i vår service.
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to cart!');
  }

// jag vill kunna se detaljer, detta bör skickas till min child productDetails
  toggleDetails(p: Product) {

    // skickar rätt produkt
    console.log(p);
    // // här ska routingen ske till product-details
    // this.service.getOneMovie(p);

  }

}


// det jag vill ska hända:
/*
1. användaren klickar på köp
2. movieSource uppdateras (movieSource)
3. publishedMovie får ett nytt värde
4. Subscribe får ett nytt värde

*/
