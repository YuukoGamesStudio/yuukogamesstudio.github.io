import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      {
        provide: LIGHTBOX_CONFIG,
        useValue: {
          keyboardShortcuts: false,
          exitAnimationTime: 1000,
        } as LightboxConfig,
      },
    ],
  })
  .catch((err) => console.error(err));
