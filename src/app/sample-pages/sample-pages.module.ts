import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SamplePagesRoutes } from './sample-pages.routing';
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
import { OtherAddressComponent } from './other-address/other-address.component';
import { DriverShiftComponent } from './driver-shift/driver-shift.component';
import { RegionsComponent } from './regions/regions.component';
import { SalutationComponent } from './salutation/salutation.component';
import { BankHolidayComponent } from './bank-holiday/bank-holiday.component';
import { MileageTariffComponent } from './mileage-tariff/mileage-tariff.component';
import { JourneyTariffComponent } from './journey-tariff/journey-tariff.component';
import { PointTariffComponent } from './point-tariff/point-tariff.component';
import { HourlyRateTariffComponent } from './hourly-rate-tariff/hourly-rate-tariff.component';
import { TariffDiscountComponent } from './tariff-discount/tariff-discount.component';
import { AddressComponent } from './address/address.component';
import { PassengerComponent } from './passenger/passenger.component';
import { AirlineComponent } from './airline/airline.component';
import { ClientsComponent } from './clients/clients.component';
import { CustomersComponent } from './customers/customers.component';
import { PricetemplateComponent } from './pricetemplate/pricetemplate.component';
import { FlightDestinationComponent } from './flight-destination/flight-destination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SamplePagesRoutes),
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [
    HelperclassesComponent,
    InvoiceComponent,
    ProfileComponent,
    PricingComponent,
    TimelineComponent,
    SysconfigComponent,
    ParametersComponent,
    PartnercompanyComponent,
    BookingclassesComponent,
    CustomertypesComponent,
    BookingtypesComponent,
    CompaniesComponent,
    NewspaperComponent,
    BeveragesComponent,
    ConsumablesComponent,
    AirportsComponent,
    HotelsComponent,
    StationsComponent,
    OtherAddressComponent,
    DriverShiftComponent,
    RegionsComponent,
    SalutationComponent,
    BankHolidayComponent,
    MileageTariffComponent,
    JourneyTariffComponent,
    PointTariffComponent,
    HourlyRateTariffComponent,
    TariffDiscountComponent,
    AddressComponent,
    PassengerComponent,
    ClientsComponent,
    CustomersComponent,
    PricetemplateComponent,
    AirlineComponent,
    FlightDestinationComponent
  ]
})

export class SamplePagesModule {}