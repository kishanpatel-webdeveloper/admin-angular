import { Injectable } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  flagForhideShowPrivateInfo: boolean;
  flagForhideShowAddressInfo: boolean;
  flagForhideShowChangePassword: boolean;

  constructor(public utilsService: UtilsService) {
    this.flagForhideShowPrivateInfo = false;
    this.flagForhideShowAddressInfo = false;
    this.flagForhideShowChangePassword = false;
  }

  privateInfoEdit() {
    this.flagForhideShowPrivateInfo = true;
  }
  addressDetailsEdit() {
    this.flagForhideShowAddressInfo = true;
  }
  changePasswordEdit() {
    this.flagForhideShowChangePassword = true;
  }


  cancelUpdate() {
this.flagForhideShowPrivateInfo = false;
this.flagForhideShowAddressInfo = false;
  }
}
