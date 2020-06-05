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



  // här kommer mina tester för MockMovieSerivce
  it('should get movies', () => {
    expect(component.productList.length).toBe(3);
    expect(component.productList[0].productName).toBe('Star Wars 1');

  });



});
