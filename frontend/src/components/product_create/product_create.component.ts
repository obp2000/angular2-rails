import {Component, OnInit} from '@angular/core';
//import {
//FORM_DIRECTIVES,
//CORE_DIRECTIVES,
//FormBuilder,
//ControlGroup,
//Validators
//} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {RouteParams, Router} from '@angular/router';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductFormComponent} from '../../components';
import {ProductService} from '../../services';
import {Product} from '../../models';

//const templateUrl = require('./product_create.html');

@Component({
//  moduleId: module.id,
  templateUrl: './product_create.html',
//  directives: [
//    CORE_DIRECTIVES,
//    FORM_DIRECTIVES,
//    ProductFormComponent
//  ],
  providers: [
    ProductService
  ]
})

export class ProductCreateComponent {
  form: FormGroup;
  product: Product = new Product({});

  constructor(
    private _router: Router,
//    private _routeParams: RouteParams,
    private _productService: ProductService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'price': [''],
      'weight': ['0'],
      'width': ['0'],
      'density': ['0'],
      'dollar_price': ['0'],
      'dollar_rate': ['0']
    });
  }

  onSubmit(): void {
    this._productService
      .create(this.product)
      .subscribe(_ => {
        this._router.navigate(['Products']);
      });
  }
}
