import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { Product } from 'src/app/models/Product';
import { MockMovieDataService } from 'src/app/services/movieData/mock-movie-service';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [ ProductsComponent, { provide: MovieDataService, useClass: MockMovieDataService }]
    })
    .compileComponents();
  }));

  // har skapas komponenten upp, och läggs till i fixture-klassen
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testar vår service om den returnerar 3 till vår component
  let movieService: MockMovieDataService;

  // här kommer mina tester för MockMovieSerivce
  it('should contain productList which length is 3', () => {
    expect(component.productList.length).toBe(0);
    movieService = new MockMovieDataService();
    movieService.getMovies();
    expect(component.productList.length).toBe(3);

  });



  it('#addToCart(product) should add item to cart', () => {
    expect(component.productList.length).toBe(3);
    component.addToCart(this.product);
    expect(component.addToCart(this.product)).toHaveBeenCalled;

  });




});
