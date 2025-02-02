import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';


bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      provideRouter(routes),
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
