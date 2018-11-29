import { Routes } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';

export const BookingRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: '',
      component: BookingComponent,
      data: {
        title: 'Booking',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Booking'}]
      }
    },
	{
      path: 'detail',
      component: BookingdetailComponent,
      data: {
        title: 'Booking Detail',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Booking'}]
      }
    }
	]
  }
];
