import { InjectionToken } from '@angular/core';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { environment } from '../environment/environment';
// use this environment any multiple service

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint,
};
