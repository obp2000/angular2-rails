import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
//import {Observable} from 'rxjs/Observable';

import {ProductFormComponent} from '../../components';
import {ProductService} from '../../services';
import {Product} from '../../models';

//const templateUrl = require('./product_detail.html');

@Component({
//  moduleId: module.id,
  templateUrl: './product_detail.html',
//  directives: [
//    CORE_DIRECTIVES,
//    FORM_DIRECTIVES,
//    ProductFormComponent
//  ],
  providers: [
    ProductService
  ]
})

export class ProductDetailComponent implements OnInit {
  id: string;
  form: FormGroup;
  product: Product = new Product({});

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
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

  ngOnInit(): void {
//    this.id = this._routeParams.get('id');
//    this._productService
//      .fetch(this.id)
//      .subscribe(r => this.product = r);
    this.id = this._route.snapshot.params['id'];
//    this._route.params;
    this._productService.fetch(this.id)
    .subscribe(product => this.product = product);
  }

  onSubmit(): void {
    this._productService
      .update(this.id, this.product)
      .subscribe(_ => {
        this._router.navigate(['Products']);
      });
  }
}
