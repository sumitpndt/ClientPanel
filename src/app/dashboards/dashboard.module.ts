import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ToastModule,ToastOptions} from 'ng6-toastr/ng2-toastr';
import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from './dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from './dashboard-components/project/project.component';
import { RecentcommentComponent } from './dashboard-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from './dashboard-components/recent-message/recent-message.component';
import { SocialSliderComponent } from './dashboard-components/social-slider/social-slider.component';
import { TodoComponent } from './dashboard-components/to-do/todo.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { PageAnalyzerComponent } from './dashboard-components/page-analyzer/pa.component';
import { WidgetComponent } from './dashboard-components/widget/widget.component';
import { CustomerSupportComponent } from './dashboard-components/customer-support/cs.component';
import { TotalEarningComponent } from './dashboard-components/total-earnings/te.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { EarningComponent } from './dashboard-components/earning-report/earning-report.component';
import { ActivityComponent } from './dashboard-components/activity-timeline/activity.component';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';


@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        Ng2SmartTableModule,
		CalendarModule.forRoot(),
        RouterModule.forChild(DashboardRoutes),
        ToastModule.forRoot()
    ],
	declarations: [
        Dashboard1Component,
        Dashboard2Component,
        Dashboard3Component,
        IncomeCounterComponent,
        ProjectCounterComponent, 
        ProjectComponent, 
        RecentcommentComponent,
        RecentmessageComponent, 
        SocialSliderComponent, 
        TodoComponent,
        ProfileComponent,
        PageAnalyzerComponent,
        WidgetComponent,
        CustomerSupportComponent,
        TotalEarningComponent,
        FeedsComponent,
        EarningComponent,
        ActivityComponent
    ]
})
export class DashboardModule { }

export class CustomToastOption extends ToastOptions {
    animate = 'flyRight'; // you can override any options available
    newestOnTop = true;
    showCloseButton = true;
    positionClass = "toast-top-center";
    toastLife: 10;
  
  
  }