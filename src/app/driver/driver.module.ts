import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DriverRoutes } from './driver.routing';
import { DriverComponent } from '../driver/driver/driver.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Driverservice } from '../driver/Driverservice';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DriverRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DriverComponent,
    AdddriverComponent,
    DeleteDriverComponent
  ],
  providers:[Driverservice]
})

export class DriverModule {}