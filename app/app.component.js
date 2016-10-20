import {
  Component, 
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { applicationService } from './app.service';

export var applicationComponent = Component({
  selector: 'my-app',
  template: '<div #example></div>',
  styleUrls: ['./app.css'],
  queries: {
    viewContainerRef: new ViewChild('example', { read: ViewContainerRef })
  }
})
.Class({
  constructor: [
    ComponentFactoryResolver,
    applicationService,

    function (componentFactoryResolver, appService){
      this.componentFactoryResolver = componentFactoryResolver;
      this.appService = appService;
    }
  ],

  ngAfterViewInit: function() {
    var _example = this.appService.getExample();
    
    if(_example){
      this.viewContainerRef.createComponent
      (
        this.componentFactoryResolver.resolveComponentFactory(_example),
        this.viewContainerRef.length,
        this.viewContainerRef.parentInjector
      );
    }
  }
});