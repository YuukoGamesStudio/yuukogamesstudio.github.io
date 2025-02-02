import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideAnimations(),
      {
        provide: LIGHTBOX_CONFIG,
        useValue: {
          keyboardShortcuts: true,
          exitAnimationTime: 200,
        } as LightboxConfig,
      },
    ],
  })
  .catch((err) => console.error(err));
