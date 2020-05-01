import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isDate } from 'util';
import { User } from '../../models/user';
import { Address } from 'src/app/models/Address';
import * as data from "../../shared/Json/all-City.json";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  privateInfoForm: FormGroup;
  addressInfoForm: FormGroup;
  changePasswordForm: FormGroup;


  flagForhideShowPrivateInfo: boolean;
  flagForhideShowAddressInfo: boolean;
  flagForhideShowChangePassword: boolean;

  confirmPassword: string;
  newPassword: string;
  currentPassword: string;
  flagforPwd: boolean;
  hide = true;
  hide1 = true;
  hide2 = true;


  @ViewChild('userProfilePicDoc')
  userProfilePicDoc: ElementRef;
  maxSize: number = 1024 * 5;
  url: string;
  filenameForuserProfile: string;
  flagForInvalidImageSize: boolean = false;
  flagForInvalidExtension: boolean = false;

  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'National Capital Territory of Delhi', 'Puducherry'];
  cities: any = [];

  todayDate = new Date();
  userObj = new User();

  constructor(public utilsService: UtilsService, public formBuilder: FormBuilder) {
    this.flagForhideShowPrivateInfo = false;
    this.flagForhideShowAddressInfo = false;
    this.flagForhideShowChangePassword = false;
    this.userObj.address = new Address();
    this.cities = data['default'];
    this.url = 'assets/images/users/avatar-2.jpg';
    console.log(this.cities);
  }

  public hasErrorPrivateInfo = (controlName: string, errorName: string) => {
    return this.privateInfoForm.controls[controlName].hasError(errorName);
  }
  public hasErrorAddressInfo = (controlName: string, errorName: string) => {
    return this.addressInfoForm.controls[controlName].hasError(errorName);
  }
  public hasErrorChangePassword = (controlName: string, errorName: string) => {
    console.log(controlName);

    return this.changePasswordForm.controls[controlName].hasError(errorName);
  }
  applyPrivateInfoValidation() {
    this.privateInfoForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])],
      mobileNo: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PHONE_NO)])],
      dateOfBirth: ['', Validators.compose([Validators.required])]

    });
  }

  applyValidationForAddressInfo() {
    this.addressInfoForm = this.formBuilder.group({
      address: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.ONLY_SPACE_NOT_ALLOW)])],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PINCODE)])]
    });
  }

  applyValidationForChangePassword(): void {
    this.changePasswordForm = this.formBuilder.group({
      'password': [null, Validators.compose([Validators.required])],
      'newPassword': [null, Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_PASSWORD)])],
      'confirmPwd': [null, Validators.required]
    }, { validator: MustMatch('newPassword', 'confirmPwd') });
  }


  privateInfoEdit() {
    this.flagForhideShowPrivateInfo = true;
  }
  addressDetailsEdit() {
    this.userObj.address = new Address();
    this.flagForhideShowAddressInfo = true;
  }
  changePasswordEdit() {
    this.flagForhideShowChangePassword = true;
  }
  updatePrivateInfo() {
    this.userObj = new User();
    this.applyPrivateInfoValidation();
    this.flagForhideShowPrivateInfo = false;
  }

  cancelUpdate() {
    this.userObj = new User();
    this.applyPrivateInfoValidation();
    this.flagForhideShowPrivateInfo = false;
  }
  updateAddressInfo() {
    this.userObj.address = new Address();
    this.applyValidationForAddressInfo();
    this.flagForhideShowAddressInfo = false;
  }

  cancelUpdateAddressInfo() {
    this.userObj.address = new Address();
    this.applyValidationForAddressInfo();
    this.flagForhideShowAddressInfo = false;
  }

  changePassword() {
    this.currentPassword = undefined;
    this.confirmPassword = undefined;
    this.newPassword = undefined;
    this.applyValidationForChangePassword();
    this.utilsService.toasterService.success('Change Password Successfully.', '', {
      positionClass: 'toast-top-right',
      closeButton: true
    });
  }
  cancelChangePassword() {
    this.currentPassword = undefined;
    this.confirmPassword = undefined;
    this.newPassword = undefined;
    this.applyValidationForChangePassword();
  }

  ageValidator(dateOfBirth): void {

    if (isDate(new Date(dateOfBirth))) {

      const age = this.countDayDifferenceOfTwoDate(dateOfBirth, this.todayDate);
      if (age < 18) {
        this.privateInfoForm.controls['dateOfBirth'].setErrors({ incorrect: true });
      } else {
        this.privateInfoForm.controls['dateOfBirth'].setErrors(null);
      }
    } else {
      console.log('invalid');

    }
  }

  passwordMatch(pwd) {

    if (pwd && this.newPassword !== pwd) {
      this.flagforPwd = true;
    } else {
      this.flagforPwd = false;
    }
  }


  /**
  * used
  * @author : Dhrumin Ranoliya
  * @param FirstDate : from Date
  * @param SecondDate : end Date
  * @param days : Final Count Days
  * @function countDayDifferenceOfTwoDate : Calculate difference between Two Dates.
  */
  countDayDifferenceOfTwoDate(FirstDate, SecondDate): number {
    if (!this.utilsService.isNullUndefinedOrBlank(FirstDate) &&
      !this.utilsService.isNullUndefinedOrBlank(SecondDate)
    ) {
      const date1 = new Date(FirstDate);
      const date2 = SecondDate;

      const timeDiff = Math.abs(Date.now() - date1.getTime());
      const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
      return age;
      // return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
    }
  }

  onSelectFile(event): void {
    if (event.target.files && event.target.files[0]) {
      this.flagForInvalidExtension = false;
      this.flagForInvalidImageSize = false;
      const reader = new FileReader();
      const max_file_size = 256000;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const ext = selectedFile.name.split('.').pop();
        const ext1 = (ext).toLowerCase();
        // this.extensionForAttachment = ext1;

        if (ext1 === 'jpeg' || ext1 === 'png' || ext1 === 'jpg') {
          if (max_file_size < selectedFile.size) {
            this.flagForInvalidImageSize = true;
            this.filenameForuserProfile = '';
            // this.url = this.utilsService.urlForPhoto + this.photoName;
          } else {
            this.filenameForuserProfile = event.target.files[0].name;
            // this.formDataForSaveAndUpdate.set('document', event.target.files[0]);
            this.utilsService.readUrl(event, response => {
              this.url = response;
              const blob = this.utilsService.convertBase64ToBlob(response);
              // const fileURL = URL.createObjectURL(blob);
              // this.url = fileURL;
              const imageBASE64 = this.url.split(',')[1];
            });
          }
        } else {
          this.flagForInvalidExtension = true;
          this.filenameForuserProfile = '';
          // this.url = this.utilsService.urlForPhoto + this.photoName;
        }
      }

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
