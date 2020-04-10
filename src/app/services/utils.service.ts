import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';


declare var $: any;
// import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  // static URL = 'http://13.234.132.85/';
  static URL = 'http://uat-api-server.genuusdemo.com/';
  static FRONT_URL = 'http://uat-kurate-an.genuusdemo.com/';


  constructor(public http: HttpClient, public router: Router) {

  }

  /**
  * @author : Dhrumin-Ranoliya
  * @param isDisplayToast display tost or not , pass true or false
  * @param url API name
  * @param params params
  * @param callback response of server
  */
  // postMethodAPI(isDisplayToast, apiName, params, callback: (response: any, isResponseOnPage: boolean) => void, isCrudAPI?: boolean, sharedToken?: string, redirectTo?: string) {
  //   // this.loaderStart++;
  //   this.customJsonInclude(params);
  //   let headers = new HttpHeaders()
  //     .append('ChannelID', 'WEB')
  //     .append('ReqID', '789654')
  //     .append('RequestDate', Date.parse(new Date().toString()).toString())
  //     .append('XkurateKey', 'KEY-WEB-#1014');
  //   // if (apiName === 'api/listCollections') {

  //   // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   // }

  //   if (this.arrayOfapiNameToExcludeToken.indexOf(apiName) < 0) {
  //     console.log(apiName);

  //     if (apiName === 'api/forgotPassword') {
  //       headers = headers.append('ApiToken', 'yc2w6Scz3aZNrSO3z9TAYm0G8GzDKrGCTHUlh18ATT2ZlRPei4niaxVQXglvm278YZGftWxQs59ARPT0');

  //     } else {
  //       if (!this.isEmptyObjectOrNullUndefiend(sharedToken)) {

  //         headers = headers.append('ApiToken', sharedToken);
  //       } else {

  //         headers = headers.append('ApiToken', this.getToken());
  //       }
  //     }
  //   }
  //   apiName = UtilsService.URL + apiName;
  //   return this.http.post(apiName, params, { headers: headers }).subscribe(response => {
  //     // Read the result field from the JSON response.
  //     // if (this.loaderStart > 0) {
  //     //   this.loaderStart--;
  //     // }
  //     const serverResponse: ResponseWrapperDTO = Deserialize(response, ResponseWrapperDTO);
  //     if (serverResponse.response === 111) {
  //       if (isDisplayToast) {
  //         this.toasterService.success(serverResponse.message, '', {
  //           positionClass: 'toast-top-right',
  //           closeButton: true
  //         });
  //       }
  //       if (isCrudAPI) {

  //         callback(serverResponse.message, false);
  //       } else {
  //         callback(serverResponse.result, false);

  //       }
  //     } else if (serverResponse.response === 0) {

  //       if (isCrudAPI) {

  //         callback(serverResponse.message, true);
  //       } else {
  //         console.log(serverResponse);

  //         this.toasterService.error(serverResponse.message, '', {
  //           positionClass: 'toast-top-right',
  //           closeButton: true
  //         });
  //         if (!this.isNullUndefinedOrBlank(redirectTo)) {
  //           localStorage.removeItem('breadCrumbs');
  //           this.redirectTo(redirectTo);
  //         }
  //       }
  //     }
  //   }
  //   );
  // }


  getToken(): any {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }




  /**
  * This Method Is Use For Remove Blank And Null Key From Object.
  */
  customJsonInclude(obj): void {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (obj[key] && obj[key].length > 0) {
          obj[key] = this.removeEmptyElementsFromArray(obj[key]);
        }
        if (this.isEmptyObject(obj[key])) {
          delete obj[key];
        } else {
          this.customJsonInclude(obj[key]);
        }
      } else {
        if (obj[key] === undefined || obj[key] === null) {
          delete obj[key];
        }
      }
    }
  }

  /**
  * This Method Is Use From Remove Empty Element From Array
  * @param test_array  your selected array pass as args.
  */
  removeEmptyElementsFromArray(test_array): Array<any> {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
      const id = test_array[index];
      if (id) {
        result[++resIndex] = id;
      }
    }
    return result;
  }

  /*
  *
  * Used to check if object ios empaty or not..!
  * @param obj = 'indecated object which you want to check'
  * return true if empty..!
  */
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }


  removeDublicateSpaceFromString(str?: string): string {
    return str.replace(/\s+/g, ' ');
  }


  isAuthenticated(): string {
    return localStorage.getItem('isAuthenticate') ? localStorage.getItem('isAuthenticate') : null;
  }

  isNullUndefinedOrBlank(obj): boolean {
    if (obj == null || obj === undefined || (obj === '' && obj !== 0)) {
      return true;
    }
    return false;
  }
  isEmptyObjectOrNullUndefiend(...value): boolean {
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (this.isNullUndefinedOrBlank(value[i]) || this.isEmptyObject(value[i])) {
          return true;
        }
      }
    }
    return false;
  }

  redirectTo(...route): void {
    this.router.navigate(route);
  }

  redirectToWithQueryParam(param, route: Array<string>): void {
    console.warn(param);
    console.warn(route);
    this.router.navigate(route, { queryParams: param });
  }





  /**
   * @author Dhrumin Ranoliya
   * @param modalId : id for hideModal
   * @function hideModal used for hide opened modal using modalId
   */
  hideModal(modalId: string) {
    $('' + '#' + modalId + '').modal('hide');
  }

  /**
   * @author Dhrumin Ranoliya
   * @param modalId : id for openModal
   * @function openModal used for open modal using modalId
   */
  openModal(modalId: string) {
    $('' + '#' + modalId + '').modal({ backdrop: 'static', keyboard: false });
  }

  /* To copy Text from Textbox */
  copyInputMessage(inputElement) {
    console.log(inputElement);

    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  /* To copy any Text */
  copyText(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
