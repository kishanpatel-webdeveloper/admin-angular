import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDragDropComponent } from './demo-drag-drop/demo-drag-drop.component';

const routes: Routes = [
  { path: '', redirectTo: 'work_area', pathMatch: 'full ' },
  {
    path: 'work_area', component: AdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'scrumboard', component: ScrumboardComponent },
      { path: 'demo-drag-drop', component: DemoDragDropComponent },
    ]
  }];

@NgModule({
  declarations: [DashboardComponent, AdminComponent, ScrumboardComponent, DemoDragDropComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
