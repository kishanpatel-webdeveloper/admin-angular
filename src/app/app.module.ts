import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMomentDateModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 1, newestOnTop: true, preventDuplicates: true, autoDismiss: true,
      tapToDismiss: false,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  { provide: DateAdapter, useClass: MomentDateAdapter }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
