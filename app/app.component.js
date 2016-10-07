import * as ngCore from '@angular/core';

import { applicationService } from './app.service';

export var application = ngCore.Component({
  selector: 'my-app',
  template: '<div #example></div>',
  styleUrls: ['./app.css'],
  queries: {
    viewContainerRef: new ngCore.ViewChild('example', { read: ngCore.ViewContainerRef })
  }
})
.Class({
  constructor: [
    ngCore.DynamicComponentLoader,
    applicationService,

    function (componentLoader, appService){
      this.componentLoader = componentLoader;
      this.appService = appService;
    }
  ],

  ngAfterViewInit: function() {
    var _example = this.appService.getExample();

    if(_example){
      this.componentLoader.loadNextToLocation(
        _example, 
        this.viewContainerRef
      );
    }
  }
});