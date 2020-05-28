import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckOutFormComponent } from './components/check-out-form/check-out-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    MenuComponent,
    CheckOutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
