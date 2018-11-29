import { Routes } from '@angular/router';

import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { TimelineComponent } from './timeline/timeline.component';

import { SysconfigComponent } from './sysconfig/sysconfig.component';
import { ParametersComponent } from './parameters/parameters.component';
import { PartnercompanyComponent } from './partnercompany/partnercompany.component';
import { BookingclassesComponent } from './bookingclasses/bookingclasses.component';
import { CustomertypesComponent } from './customertypes/customertypes.component';
import { BookingtypesComponent } from './bookingtypes/bookingtypes.component';
import { CompaniesComponent } from './companies/companies.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { AirportsComponent } from './airports/airports.component';
import { HotelsComponent } from './hotels/hotels.component';
import { StationsComponent } from './stations/stations.component';
import { PricetemplateComponent } from './pricetemplate/pricetemplate.component';
import { ClientsComponent } from './clients/clients.component';
import { CustomersComponent } from './customers/customers.component';
import { OtherAddressComponent } from './other-address/other-address.component';
export const SamplePagesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'helperclasses',
      component: HelperclassesComponent,
      data: {
        title: 'Helper Classes',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Helper Classes'}]
      }
    }, 
    {
      path: 'invoice',
      component: InvoiceComponent,
      data: {
        title: 'Invoice',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Invoice Page'}]
      }
    }, 
    {
      path: 'profile',
      component: ProfileComponent,
      data: {
        title: 'Profile',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Profile Page'}]
      }
    }, 
    {
      path: 'pricing',
      component: PricingComponent,
      data: {
        title: 'Pricing',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Pricing Page'}]
      }
    },
    {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        title: 'Timeline',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Timeline Page'}]
      }
    },
	{
      path: 'sysconfig',
      component: SysconfigComponent,
      data: {
        title: 'System Configuration',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'System Configuration'}]
      }
    },
	{
      path: 'parameters',
      component: ParametersComponent,
      data: {
        title: 'Parameters',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Parameters'}]
      }
    },
	{
      path: 'partner_companies',
      component: PartnercompanyComponent,
      data: {
        title: 'Partner Company',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Partner Company'}]
      }
    },
	{
      path: 'booking_classes',
      component: BookingclassesComponent,
      data: {
        title: 'Booking Classes',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Booking Classes'}]
      }
    },
	{
      path: 'customer_types',
      component: CustomertypesComponent,
      data: {
        title: 'Customer Types',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Customer Types'}]
      }
    },
	{
      path: 'booking_types',
      component: BookingtypesComponent,
      data: {
        title: 'Booking Types',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Booking Types'}]
      }
    },
	{
      path: 'companies',
      component: CompaniesComponent,
      data: {
        title: 'Companies',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Companies'}]
      }
    },
	{
      path: 'newspapers',
      component: NewspaperComponent,
      data: {
        title: 'Newspaper',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Newspaper'}]
      }
    },
	{
      path: 'beverages',
      component: BeveragesComponent,
      data: {
        title: 'Beverages',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Beverages'}]
      }
    },
	{
      path: 'consumables',
      component: ConsumablesComponent,
      data: {
        title: 'Consumables',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Consumables'}]
      }
    },
	{
      path: 'airports',
      component: AirportsComponent,
      data: {
        title: 'Airports',
        urls: [{title: 'Dashboard',url: '/airports'},{title: 'Airports'}]
      }
    },
	{
      path: 'hotels',
      component: HotelsComponent,
      data: {
        title: 'Hotels',
        urls: [{title: 'Dashboard',url: '/hotels'},{title: 'Hotels'}]
      }
    },
	{
      path: 'stations',
      component: StationsComponent,
      data: {
        title: 'Stations',
        urls: [{title: 'Dashboard',url: '/stations'},{title: 'Stations'}]
      }
    },
	{
      path: 'clients',
      component: ClientsComponent,
      data: {
        title: 'Clients',
        urls: [{title: 'Dashboard',url: '/clients'},{title: 'Clients'}]
      }
    },
	{
      path: 'customers',
      component: CustomersComponent,
      data: {
        title: 'Customers',
        urls: [{title: 'Dashboard',url: '/customers'},{title: 'Customers'}]
      }
    },
	{
      path: 'pricetemplate',
      component: PricetemplateComponent,
      data: {
        title: 'Price Template',
        urls: [{title: 'Dashboard',url: '/pricetemplate'},{title: 'Price Template'}]
      }
    },
	{
      path: 'other-address',
      component: OtherAddressComponent,
      data: {
        title: 'Other Address',
        urls: [{title: 'Dashboard',url: '/other-address'},{title: 'Other Address'}]
      }
    }
	]
  }
];
