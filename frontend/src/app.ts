 // /// <reference path="../../typings/tsd.d.ts" />

import {ViewEncapsulation, Component} from '@angular/core';
//import {CORE_DIRECTIVES} from '@angular/common';
//import {ROUTER_DIRECTIVES, Router, RouteConfig, Location, Instruction} from '@angular/router';
//import {Router} from '@angular/router';

//import {
//HelloComponent,
//ProductsComponent,
//ProductCreateComponent,
//ProductDetailComponent,
//CustomersComponent,
//CustomerCreateComponent,
//CustomerDetailComponent} from './components';
//import {ProductService, CustomerService} from './services';

//const templateUrl = require('./app.html');

@Component({
//  moduleId: module.id + "",
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
//  templateUrl: './app.html',
//  directives: [
//    CORE_DIRECTIVES,
//    ROUTER_DIRECTIVES
//  ]
  template:
      `
      <div>dddddddddddd</div>
      `
})

export class App {}

//@RouteConfig([
//  { path: '/', name: 'Hello', component: HelloComponent },
//  { path: '/products', name: 'Products', component: ProductsComponent },
//  { path: '/products/new', name: 'ProductCreate', component: ProductCreateComponent},
//  { path: '/products/:id', name: 'ProductDetail', component: ProductDetailComponent },
//  { path: '/customers', name: 'Customers', component: CustomersComponent },
//  { path: '/customers/new', name: 'CustomerCreate', component: CustomerCreateComponent},
//  { path: '/customers/:id', name: 'CustomerDetail', component: CustomerDetailComponent }
//])

//export class App {
//
//  router: Router;
//  location: Location;
//
//  constructor(router: Router, location: Location) {
//    this.router = router;
//    this.location = location;
//  }
//}
