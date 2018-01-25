import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

//import {
//    HelloComponent,
//    ProductsComponent,
//    ProductCreateComponent,
//    ProductDetailComponent,
//    CustomersComponent,
//    CustomerCreateComponent,
//    CustomerDetailComponent,
//    ProductFormComponent,
//    CustomerFormComponent} from './components';

import {HelloComponent} from './components/hello/hello.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductFormComponent} from './components/product_form/product_form.component';
import {ProductCreateComponent} from './components/product_create/product_create.component';
import {ProductDetailComponent} from './components/product_detail/product_detail.component';
import {CustomersComponent} from './components/customers/customers.component';
import {CustomerFormComponent} from './components/customer_form/customer_form.component';
import {CustomerCreateComponent} from './components/customer_create/customer_create.component';
import {CustomerDetailComponent} from './components/customer_detail/customer_detail.component';
//import {ProductService, CustomerService} from './services';
import {ProductService} from './services/product.service';
import {CustomerService} from './services/customer.service';
import {App} from './app';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

//import { AppComponent }         from './app.component';
//import { DashboardComponent }   from './dashboard.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';
//import { HeroService }          from './hero.service';
//import { HeroSearchComponent }  from './hero-search.component';

//import {
//} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    HelloComponent,
//    ProductsComponent,
//    ProductCreateComponent,
//    ProductDetailComponent,
//    CustomersComponent,
//    CustomerCreateComponent,
//    CustomerDetailComponent,
//    ProductFormComponent,
//    CustomerFormComponent,
    App
  ],
  providers: [ ProductService,
               CustomerService,
               Location,
               {provide: APP_BASE_HREF, useValue: '/'},
               {provide: LocationStrategy, useClass: HashLocationStrategy}
               ],
  bootstrap: [ App ]
})
export class AppModule { }
