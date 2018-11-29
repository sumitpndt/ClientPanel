import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookingRoutes } from './booking.routing';
import { BookingComponent } from './booking.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BookingRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    BookingComponent,
    BookingdetailComponent
  ]
})

export class BookingModule {}