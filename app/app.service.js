import * as ngCore from '@angular/core';

function _applicationService (){
  this.constructor = function applicationService(){};

  this.getExample = function(){
    return null;
  }
}

export var applicationService = ngCore.Class(new _applicationService());