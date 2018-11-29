import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
// import {ToastModule,ToastOptions} from 'ng6-toastr/ng2-toastr';
import { AppsRoutes } from './apps.routing';
import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    QuillModule,
    DragulaModule,
    RouterModule.forChild(AppsRoutes),
    BrowserAnimationsModule
    // ToastModule.forRoot()
  ],
  declarations: [
    EmailComponent,
    TaskboardComponent,
    FullcalendarComponent
  ]
})

export class AppsModule {}

// export class CustomToastOption extends ToastOptions {
//   animate = 'flyRight'; // you can override any options available
//   newestOnTop = true;
//   showCloseButton = true;
//   positionClass = "toast-top-center";
//   toastLife: 10;
// }