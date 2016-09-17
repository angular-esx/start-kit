import * as ngCore from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { applicationService } from './app.service';
import { application } from './app.component';

document.addEventListener('DOMContentLoaded', function(){
  bootstrap(application, [
    { provide: applicationService, useClass: ngCore.Class(new _fakeApplicationService()) }
  ])
});

function _fakeApplicationService() {
  this.constructor = function fakeApplicationService(){};

  this.getExample = function(){
  };
}