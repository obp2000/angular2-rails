import {Injectable} from '@angular/core';
import {Http, Request, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../models';

@Injectable()
export class CustomerService {
  constructor(private _http: Http) {
  }

  fetchAll() {
    return this._http
      .get('/api/customers')
      .map(r => r.json())
      .map(r => {
        let results: Array<Customer> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Customer(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }

  fetch(id: string) {
    return this._http
      .get('/api/customers/' + id)
      .map(r => r.json())
      .map(r => {
        return new Customer(r);
      });
  }

  create(customer: Customer) {
    // ... Set content type to JSON
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let param: { customer: Customer } = { 'customer': customer };
    return this._http
      .post('/api/customers/', JSON.stringify(param), options);
  }

  update(id: string, customer: Customer) {
    // ... Set content type to JSON
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let param: { customer: Customer } = { 'customer': customer };
    return this._http
      .put('/api/customers/' + id, JSON.stringify(param), options);
  }

  deleteCustomer(customer: Customer) {
    return this._http
        .delete('/api/customers/' + customer.id);
  }
}
