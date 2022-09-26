import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // async function bootstrap() {
    //   const app = await NestFactory.craete(AppModule);
    //   await app.listen(3000);
    // }

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
