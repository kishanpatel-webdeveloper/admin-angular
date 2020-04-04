import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';


@NgModule({
   declarations: [
      AppComponent,
      ToolbarComponent,
      NavbarComponent,
      FooterComponent,
      AuthenticationComponent,
      LoginComponent,
      RegistrationComponent,
      ForgotPasswordComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
