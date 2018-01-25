import {ViewEncapsulation, Component, OnInit} from '@angular/core';
//import {CORE_DIRECTIVES} from '@angular/common';
import {CustomerService} from '../../services';
import {Customer} from '../../models';

//const templateUrl = require('./customers.html');

@Component({
  moduleId: module.id + '',
  templateUrl: './customers.html',
//  directives: [
//    CORE_DIRECTIVES
//  ],
  providers: [
    CustomerService
  ]
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  totalCount: number = 0;

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this._customerService
      .fetchAll()
      .subscribe(d => {
        this.customers = d.results;
        this.totalCount = d.totalCount;
      });
  }

  deleteCustomer(customer: Customer) {
      this._customerService.deleteCustomer(customer)
      .subscribe(_ => {
          this.customers.splice(this.customers.indexOf(customer), 1);
        });
  }
}
