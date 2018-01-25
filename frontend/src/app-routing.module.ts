import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {
//    HelloComponent,
//    ProductsComponent,
//    ProductCreateComponent,
//    ProductDetailComponent,
//    CustomersComponent,
//    CustomerCreateComponent,
//    CustomerDetailComponent} from './components';
import {HelloComponent} from './components/hello/hello.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductCreateComponent} from './components/product_create/product_create.component';
import {ProductDetailComponent} from './components/product_detail/product_detail.component';
import {CustomersComponent} from './components/customers/customers.component';
import {CustomerCreateComponent} from './components/customer_create/customer_create.component';
import {CustomerDetailComponent} from './components/customer_detail/customer_detail.component';

const routes: Routes = [
  { path: '/', component: HelloComponent },
  { path: '/products', component: ProductsComponent },
  { path: '/products/new', component: ProductCreateComponent},
  { path: '/products/:id', component: ProductDetailComponent },
  { path: '/customers', component: CustomersComponent },
  { path: '/customers/new', component: CustomerCreateComponent},
  { path: '/customers/:id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
