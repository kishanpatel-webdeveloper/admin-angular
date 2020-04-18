import { Injectable } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  forgotPasswordForm: FormGroup;
  email: string;
  constructor(public utilsService: UtilsService, public formBuilder: FormBuilder) { }


  applyValidation() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.compose([Validators.pattern(this.utilsService.validationService.PATTERN_FOR_EMAIL)])]],
    });
  }

  forgotPwd() {
    if (this.forgotPasswordForm.valid) {
      this.utilsService.redirectTo('/authentication/login');
      this.utilsService.toasterService.success('New Password sent to your e-mail !!', '', {
        positionClass: 'toast-top-right',
        closeButton: true
      });
    }
  }
}
