import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
  // providers: [
  //       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  //       provideAuth(() => getAuth()),
  //       provideRouter(routes),
  //     ]
};
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };
