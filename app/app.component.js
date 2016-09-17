import * as ngCore from '@angular/core';

import { applicationService } from './app.service';

function _application (){
  this.constructor = [
    ngCore.DynamicComponentLoader,
    applicationService,

    function application(componentLoader, appService){
      this.componentLoader = componentLoader;
      this.appService = appService;
    }
  ];

  this.ngAfterViewInit = function() {
    var _example = this.appService.getExample();

    if(_example){
      this.componentLoader.loadNextToLocation(
        _example, 
        this.viewContainerRef
      );
    }
  };
}

export var application = ngCore.Component({
  selector: 'my-app',
  template: '<div #example></div>',
  styleUrls: ['./app.css'],
  queries: {
    viewContainerRef: new ngCore.ViewChild('example', { read: ngCore.ViewContainerRef })
  }
})
.Class(new _application());