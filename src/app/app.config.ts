import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Layout } from './layout/layout';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: Layout }
    ])
  ]
};
