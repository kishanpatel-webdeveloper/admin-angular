import { Injectable } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationForm: FormGroup;
  userObj = new User();
  confirmPassword: string;
  flagForPasswordHideShow: boolean;
  flagForConfirmPasswordHideShow: boolean;
  constructor(public utilsService: UtilsService, public formBuilder: FormBuilder) {
    this.flagForPasswordHideShow = false;
    this.flagForConfirmPasswordHideShow = false;
  }


  applyValidation() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])],
      confPassword: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])],
    }, { validator: MustMatch('password', 'confPassword') });
  }

  registerUser() {
    if (this.registrationForm.valid) {
      this.utilsService.redirectTo('/authentication/login');
      this.utilsService.toasterService.success('Register User Successfully', '', {
        positionClass: 'toast-top-right',
        closeButton: true
      });
    }
  }
}



export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
