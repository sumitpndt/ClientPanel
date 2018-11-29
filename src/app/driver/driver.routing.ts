import { Routes } from '@angular/router';

import { DriverComponent } from '../driver/driver/driver.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';

export const DriverRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: DriverComponent,
      data: {
        title: 'Driver',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Driver'}]
      }
    },
	{
      path: 'add',
      component: AdddriverComponent,
      data: {
        title: 'Add Driver',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Add Driver'}]
      }
  },
	{
      path: 'delete',
      component: DeleteDriverComponent,
      data: {
        title: 'Delete Driver',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Delete Driver'}]
      }
    }
	]
  }
];
