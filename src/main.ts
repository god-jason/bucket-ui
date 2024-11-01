import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import "@codemirror/lang-javascript"
import "@codemirror/lang-json"

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
