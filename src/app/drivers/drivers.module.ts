import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DriversRoutes } from './Drivers.routing';
import { DriversComponent } from './drivers/drivers.component';
import { FormvalComponent } from './form-validation/form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DriversRoutes),
    FormsModule
  ],
  declarations: [
    DriversComponent,
    FormvalComponent
  ]
})

export class DriversModule {}