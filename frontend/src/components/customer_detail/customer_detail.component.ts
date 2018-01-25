import {Component, OnInit} from '@angular/core';
//import {
////FORM_DIRECTIVES,
////CORE_DIRECTIVES,
//} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {CustomerFormComponent} from '../../components';
import {CustomerService} from '../../services';
import {Customer} from '../../models';

//const templateUrl = require('./customer_detail.html');

@Component({
//  moduleId: module.id,
  templateUrl: './customer_detail.html',
//  directives: [
//    CORE_DIRECTIVES,
//    FORM_DIRECTIVES,
//    CustomerFormComponent
//  ],
  providers: [
    CustomerService
  ]
})

export class CustomerDetailComponent implements OnInit {
  id: string;
  form: FormGroup;
  customer: Customer = new Customer({});

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _customerService: CustomerService,
    fb: FormBuilder) {
    this.form = fb.group({
      'nick': ['', Validators.required],
      'name': [''],
    });
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._customerService.fetch(this.id)
    .subscribe(customer => this.customer = customer);
  }

  onSubmit(): void {
    this._customerService
      .update(this.id, this.customer)
      .subscribe(_ => {
        this._router.navigate(['Customers']);
      });
  }
}
