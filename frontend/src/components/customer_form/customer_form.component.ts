import {Component} from '@angular/core';
//import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {Customer} from '../../models';

//const templateUrl = require('./customer_form.html');

@Component({
//  moduleId: module.id,
  selector: 'customer-form',
  inputs: ['customer', 'form'],
  templateUrl: './customer_form.html',
//  directives: [
//    FORM_DIRECTIVES,
//    CORE_DIRECTIVES
//  ]
})

export class CustomerFormComponent {
  customer: Customer;
  form: FormGroup;
}
