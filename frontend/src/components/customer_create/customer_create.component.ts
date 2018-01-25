import {Component, OnInit} from '@angular/core';
//import {
//FORM_DIRECTIVES,
//CORE_DIRECTIVES,
//FormBuilder1,
//ControlGroup,
//Validators
//} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {RouteParams, Router} from '@angular/router';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {CustomerFormComponent} from '../../components';
import {CustomerService} from '../../services';
import {Customer} from '../../models';

//const templateUrl = require('./customer_create.html');

@Component({
//  moduleId: module.id,
  templateUrl: './customer_create.html',
//  directives: [
//    CORE_DIRECTIVES,
//    FORM_DIRECTIVES,
//    CustomerFormComponent
//  ],
  providers: [
    CustomerService
  ]
})

export class CustomerCreateComponent {
  form: FormGroup;
  customer: Customer = new Customer({});

  constructor(
    private _router: Router,
//    private _routeParams: RouteParams,
    private _customerService: CustomerService,
    fb: FormBuilder) {
    this.form = fb.group({
      'nick': ['', Validators.required],
      'name': [''],
    });
  }

  onSubmit(): void {
    this._customerService
      .create(this.customer)
      .subscribe(_ => {
        this._router.navigate(['Customers']);
      });
  }
}
