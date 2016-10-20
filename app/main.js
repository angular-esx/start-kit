import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { applicationModule } from './app.module';

document.addEventListener('DOMContentLoaded', function(){
  platformBrowserDynamic().bootstrapModule(applicationModule)
});