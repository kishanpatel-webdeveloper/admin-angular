import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from './Forgot-Password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends ForgotPasswordService implements OnInit {


  ngOnInit() {
    this.applyValidation();
  }

}
