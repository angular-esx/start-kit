import {
  Class, 
  NgModule 
} from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';

import { applicationComponent } from './app.component';
import { applicationService } from './app.service';

export var applicationModule = NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ applicationComponent ],
  providers: [ 
    { provide: applicationService, useClass: Class(new _fakeApplicationService()) }
  ],
  bootstrap: [ applicationComponent ]
})
.Class({
  constructor: function(){}
});


function _fakeApplicationService() {
  this.constructor = function (){};

  this.getExample = function(){
    /* return your component at here */
  };
}