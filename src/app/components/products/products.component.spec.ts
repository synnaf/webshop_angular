import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { Product } from 'src/app/models/Product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
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

// här kommer mina tester

// test 1 listan är från början tom
  it('should display list of movies currently empty', () => {
    expect(component.productList.length).toBe(0);

    // när vi kör onInit ska listan populeras utifrån vår service
    // getMovies är funktionen som ska köras,
    // då kommer expect(component.productList.length).toBe > 0 ngt annat

  });

// test 2 man ska kunna klicka på köp
  it('should add product to cart when buy is clicked', () => {

    // hur får jag in listan som egentligen tillhör en annan komponent?
    const buyProduct = new Product();
    buyProduct.productName = 'Test-film-köpa';
    buyProduct.productId = '666';
    buyProduct.productPrice = 120;
    buyProduct.productImage = 'www.google.se';


    const emptyCart = component.shoppingcart.length;
    const spy = spyOn(component.productToCart, 'emit');
    // när man trycker på BUY så ändras värdet på listan shoppingcart
    component.addToCart(buyProduct);

    // kontrollera att köp-knappen har blivit tryckt
    expect(spy).toHaveBeenCalled();

    // kontrollera att listans längd ändrats
    expect(emptyCart).toBeGreaterThan(0);

    // skriv ett test som kontrollerar att samma sak inte läggs till två gånger
    // men att egenskapen antal ökar med 1 varje gång man trycker på buy

  });

  it('should prevent doubles to be added') {
    
  }



  it('should show detailed information when details is clicked', () => {
    // när man trycker på DETAILS så ändras värdet på listan shoppingcart
    const spy = spyOn(component.detail, 'emit');
    // när man trycker på BUY så ändras värdet på listan shoppingcart
    // hitta vilken produkt som har klickats på
    component.displayDetails();
    expect(spy).toHaveBeenCalled;
  });

});
