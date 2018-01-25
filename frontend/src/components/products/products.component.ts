import {ViewEncapsulation, Component, OnInit} from '@angular/core';
//import {CORE_DIRECTIVES} from '@angular/common';
import {ProductService} from '../../services';
import {Product} from '../../models';

//const templateUrl = require('./products.html');

@Component({
  moduleId: module.id + '',
  templateUrl: './products.html',
//  directives: [
//    CORE_DIRECTIVES
//  ],
  providers: [
    ProductService
  ]
})

export class ProductsComponent implements OnInit {
  products: Product[];
  totalCount: number = 0;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService
      .fetchAll()
      .subscribe(d => {
        this.products = d.results;
        this.totalCount = d.totalCount;
      });
  }

  deleteProduct(product: Product) {
      this._productService.deleteProduct(product)
      .subscribe(_ => {
          this.products.splice(this.products.indexOf(product), 1);
        });
  }
}
