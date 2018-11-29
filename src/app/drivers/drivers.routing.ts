import { Routes } from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
import { FormvalComponent } from './form-validation/form-validation.component';

export const DriversRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'drivers',
      component: DriversComponent,
      data: {
        title: 'Basic Form',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'drivers Form'}]
      }
    }, 
    {
      path: 'formvalidation',
      component: FormvalComponent,
      data: {
        title: 'Form Validation Page',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Form Validation Page'}]
      }
    }]
  }
];
