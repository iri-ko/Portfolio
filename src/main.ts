import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import {
  provideRouter,
  withViewTransitions,
  withEnabledBlockingInitialNavigation
} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(), // optional
      withEnabledBlockingInitialNavigation() // optional but helpful
    ),
    provideHttpClient()
  ]
});
