import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppRoutingModule } from './app/app-routing.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppRoutingModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  .catch(err => console.error(err));
