import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';


// länka in alla komponenter du vill ha tillgång till


const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent }
  // { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
