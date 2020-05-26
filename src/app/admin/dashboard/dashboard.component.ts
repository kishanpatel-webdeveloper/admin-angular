import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';

import { DashboardService } from './Dashboard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UtilsService } from '../../services/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/Project';
import { User } from '../../models/user';
import { Deserialize, Serialize } from 'cerialize';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends DashboardService implements OnInit {


  ngOnInit() {
    this.applyCreateProjectValidation();
  }

  // changeTheme() {
  //   this.checked = !this.checked;
  //   if (this.checked === false) {
  //     document.body.setAttribute('data-theme', 'light');
  //     localStorage.setItem('data-theme', 'light');
  //   } else if (this.checked === true) {
  //     document.body.setAttribute('data-theme', 'dark');
  //     localStorage.setItem('data-theme', 'dark');
  //   }
  // }

  changelistView(type) {
    if (type === 'List-View') {
      this.flagForHideShowGridView = true;
    } else if ('Grid-View') {
      this.flagForHideShowGridView = false;
    }
  }


}

@Component({
  selector: 'app-add-project-modal',
  templateUrl: '../../shared/modals/modal-for-add-project.html',
})
export class addProjectModal {
  data1: any;
  @ViewChild('projectProfilePicDoc')
  projectProfilePicDoc: ElementRef;
  maxSize: number = 1024 * 5;
  url: string;
  filenameForuserProfile: string;
  flagForInvalidImageSize: boolean = false;
  flagForInvalidExtension: boolean = false;

  createProjectForm: FormGroup;
  flagForHideShowGridView: boolean;
  arrayOfProjects: Array<Project> = new Array<Project>();
  projectObj = new Project();
  todayDate = new Date();
  arrayOfUsers: Array<User> = new Array<User>();
  status: string;
  arrayOfPriority = [
    { id: 1, name: 'Low' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'High' }
  ];
  arrayForCurrency = [
    { id: 1, name: 'INR' },
    { id: 2, name: 'USD' }
  ];
  arrayOfCompanyConfirmation = [
    { id: 1, name: 'Yes, this project involves other company' },
    { id: 2, name: 'No , this project is for our company.' },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public utilsService: UtilsService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<addProjectModal>) {
    this.applyCreateProjectValidation();
    this.status = this.data[0];
    if (this.status === 'Edit') {
      this.projectObj = data[1];
      console.log(data[1]);
      console.log(this.projectObj.users);

    }
    if (this.utilsService.isNullUndefinedOrBlank(this.projectObj.projectImgUrl)) {

      this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';
    }
    // this.url = 'assets/images/companies/img-1.png';
    const userObj1 = new User();
    userObj1.id = '1';
    userObj1.name = 'Dhrumin';
    userObj1.profileImg = 'assets/images/users/avatar-6.jpg';

    const userObj2 = new User();
    userObj2.id = '2';
    userObj2.name = 'Kishan';
    userObj2.profileImg = 'assets/images/users/avatar-2.jpg';

    const userObj3 = new User();
    userObj3.id = '3';
    userObj3.name = 'Brijesh';
    userObj3.profileImg = 'assets/images/users/avatar-3.jpg';

    const userObj4 = new User();
    userObj4.id = '4';
    userObj4.name = 'Preyash';
    userObj4.profileImg = 'assets/images/users/avatar-7.jpg';
    this.arrayOfUsers.push(userObj1);
    this.arrayOfUsers.push(userObj2);
    this.arrayOfUsers.push(userObj3);
    this.arrayOfUsers.push(userObj4);
  }

  public hasErrorCreateProjectInfo = (controlName: string, errorName: string) => {
    return this.createProjectForm.controls[controlName].hasError(errorName);
  }
  applyCreateProjectValidation() {
    this.createProjectForm = this.formBuilder.group({
      projectName: ['', Validators.compose([Validators.required, Validators.pattern(this.utilsService.validationService.PATTERN_FOR_ALPHABATES_AND_SPACE)])],
      description: [''],
      externalCompany: [''],
      members: [''],
      startDate: [''],
      dueDate: [''],
      priority: ['', Validators.compose([Validators.required])],
      estimationTime: ['', Validators.pattern(this.utilsService.validationService.ONLY_NUMBERS)],
      estimationCost: ['', Validators.pattern(this.utilsService.validationService.ONLY_NUMBERS)],
      currency: ['', Validators.compose([Validators.required])],
    }, { validator: this.checkDates });
  }

  checkDates(group: FormGroup) {
    if (group.controls.dueDate.value && group.controls.startDate.value) {

      if (group.controls.dueDate.value < group.controls.startDate.value) {
        group.controls['dueDate'].setErrors({ notValid: true });
        group.controls['startDate'].setErrors({ notValid: true });
        return;
      }
      group.controls['dueDate'].setErrors(null);
      group.controls['startDate'].setErrors(null);
      return;
    } else if (group.controls.dueDate.value && !group.controls.startDate.value) {
      group.controls['startDate'].setErrors({ required: true });
      group.controls['startDate'].markAsTouched();
      return;
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
            this.projectObj.fileName = '';
            this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';

            // this.url = this.utilsService.urlForPhoto + this.photoName;
          } else {
            this.filenameForuserProfile = event.target.files[0].name;
            this.projectObj.fileName = event.target.files[0].name;
            // this.formDataForSaveAndUpdate.set('document', event.target.files[0]);
            this.utilsService.readUrl(event, response => {
              // this.url = response;
              this.projectObj.projectImgUrl = response;
              const blob = this.utilsService.convertBase64ToBlob(response);
              // const fileURL = URL.createObjectURL(blob);
              // this.url = fileURL;
            });
          }
        } else {
          this.flagForInvalidExtension = true;
          this.filenameForuserProfile = '';
          this.projectObj.fileName = '';
          // this.url = this.utilsService.urlForPhoto + this.photoName;
          this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';
        }
      }
    }
  }

  save() {
    this.dialogRef.close(this.projectObj);
  }
  cancel() {
    this.projectObj = new Project();
    this.projectProfilePicDoc.nativeElement.value = '';
    this.filenameForuserProfile = '';
    this.dialogRef.close(null);
  }
}
