import {ViewEncapsulation, Component} from '@angular/core';
//import {CORE_DIRECTIVES} from '@angular/common';

//const templateUrl = require('./hello.html');

@Component({
//  moduleId: module.id + "",
//  templateUrl: './hello.html',
//  directives: [
//    CORE_DIRECTIVES
//  ]
  template: `
  <h2> Hello Angular2 on rails </h2>

Angular2 + Rails + webpack example
  `
})

export class HelloComponent {
}
