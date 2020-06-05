import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartComponent } from './shoppingcart.component';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { MockShoppingcartService } from 'src/app/services/shoppingcart/mock-shoppingcart-service';

describe('ShoppingcartComponent', () => {
  let component: ShoppingcartComponent;
  let fixture: ComponentFixture<ShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartComponent ],
      providers: [ ShoppingcartComponent, {provide: ShoppingcartService, useClass: MockShoppingcartService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four movies available in cart', () => {
    expect(component.cartItems.length).toBe(4);
  });




});
