import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'products' }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
