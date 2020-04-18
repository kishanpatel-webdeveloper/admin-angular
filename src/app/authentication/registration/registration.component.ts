import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './Registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends RegistrationService implements OnInit {


  ngOnInit() {
    this.applyValidation();
  }

}
