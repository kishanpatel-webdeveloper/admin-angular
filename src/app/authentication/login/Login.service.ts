import { UtilsService } from '../../services/utils.service';
import { Deserialize, Serialize } from 'cerialize';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { StorageListnerService } from '../../services/storage-listner.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginForm: FormGroup;
  loginResponse = new User();
  flagForPasswordHideShow: boolean;
  hide = true;
  userOb = {
    userNameOrEmail: undefined,
    password: undefined
  };
  constructor(public utilsService: UtilsService, public storageService: StorageListnerService, public _formBuilder: FormBuilder) { this.flagForPasswordHideShow = false; }

  applyValidation(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.compose([Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])]],
      password: ['', Validators.compose([Validators.required])]
    });
  }


  loginAPI() {
    if (this.loginForm.valid) {

this.utilsService.redirectTo('/admin/work_area/dashboard');
    }

  }


  setLocalStorage(loginResponse: User) {
    const promise = new Promise((resolve, reject) => {
      try {
        this.storageService.store('user', JSON.stringify(loginResponse));
        // this.storageService.store('token', Deserialize(loginResponse.api_token));
        resolve();
      } catch (error) {
        reject();
      }
    });
    return promise;
  }

}
