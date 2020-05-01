import { Component, OnInit } from '@angular/core';
import { ProfileService } from './Profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ProfileService implements OnInit {


  ngOnInit() {
    this.applyPrivateInfoValidation();
    this.applyValidationForAddressInfo();
    this.applyValidationForChangePassword();
  }

}
