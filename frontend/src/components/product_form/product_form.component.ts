import {Component} from '@angular/core';
//import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {Product} from '../../models';

//const templateUrl = require('./product_form.html');

@Component({
//  moduleId: module.id,
  selector: 'product-form',
  inputs: ['product', 'form'],
  templateUrl: './product_form.html',
//  directives: [
//    FORM_DIRECTIVES,
//    CORE_DIRECTIVES
//  ]
})

export class ProductFormComponent {
  product: Product;
  form: FormGroup;
}
