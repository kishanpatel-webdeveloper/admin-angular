import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDragDropComponent } from './demo-drag-drop/demo-drag-drop.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';

const routes: Routes = [
  { path: '', redirectTo: 'work_area', pathMatch: 'full ' },
  {
    path: 'work_area', component: AdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'scrumboard', component: ScrumboardComponent },
      { path: 'demo-drag-drop', component: DemoDragDropComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'calender', component: FullCalendarComponent },
    ]
  }];

@NgModule({
  declarations: [DashboardComponent, AdminComponent, ProfileComponent, ScrumboardComponent, FullCalendarComponent, DemoDragDropComponent],
  imports: [
    SharedModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
