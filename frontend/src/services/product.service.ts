import {Injectable} from '@angular/core';
//import {HTTP_PROVIDERS, Http, Request, Response, Headers, RequestOptions} from '@angular/http';
import {Http, Request, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models';

@Injectable()
export class ProductService {
  constructor(private _http: Http) {
  }

  fetchAll() {
    return this._http
      .get('/api/products')
      .map(r => r.json())
      .map(r => {
        let results: Array<Product> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Product(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }

  fetch(id: string) {
    return this._http
      .get('/api/products/' + id)
      .map(r => r.json())
      .map(r => {
        return new Product(r);
      });
  }

  create(product: Product) {
    // ... Set content type to JSON
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let param: { product: Product } = { 'product': product };
    return this._http
      .post('/api/products/', JSON.stringify(param), options);
  }

  update(id: string, product: Product) {
    // ... Set content type to JSON
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let param: { product: Product } = { 'product': product };
    return this._http
      .put('/api/products/' + id, JSON.stringify(param), options);
  }

  deleteProduct(product: Product) {
    return this._http
        .delete('/api/products/' + product.id);
  }
}
