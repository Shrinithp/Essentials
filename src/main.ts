import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeadersComponent } from './app/header/headers.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(HeadersComponent, appConfig) this is not the recomended way
                                                    //App component is the root and all other component comes under that
