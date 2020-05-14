import { Injectable, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from '../../models/Project';
import { User } from '../../models/user';
import { UtilsService } from '../../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // color: ThemePalette = 'accent';
  // checked = false;
  // disabled = false;

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
    { id: 1, name: 'USD' }
  ];
  arrayOfCompanyConfirmation = [
    { id: 1, name: 'Yes, this project involves other company' },
    { id: 2, name: 'No , this project is for our company.' },
  ];
  selectedIndex = 0;
  constructor(@Inject(DOCUMENT) document, r: Renderer2, public utilsService: UtilsService, public formBuilder: FormBuilder) {
    this.flagForHideShowGridView = false;
    this.url = 'assets/images/companies/img-1.png';
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
    // const theme = localStorage.getItem('data-theme');
    // if (theme === 'light') {
    //   this.checked = false;
    //   // document.body.setAttribute('data-theme', 'light');
    // } else if (theme === 'dark') {
    //   this.checked = true;
    //   // document.body.setAttribute('data-theme', 'dark');

    // }
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
              const imageBASE64 = this.url.split(',')[1];
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

  createProject(status) {
    this.utilsService.hideModal('createProjectModal');
    if (status === 'Add') {
      this.arrayOfProjects.push(this.projectObj);
      this.projectObj = new Project();
      // this.url = 'assets/images/companies/img-1.png';
      // this.utilsService.hideModal('createProjectModal');
    } else {
      const index = this.arrayOfProjects.findIndex(val => val.title === this.projectObj.title);
      // this.projectObj.projectImgUrl = this.url;
      this.arrayOfProjects[index] = this.projectObj;
      this.projectObj = new Project();

      // this.utilsService.hideModal('createProjectModal');
      // this.url = 'assets/images/companies/img-1.png';
      // this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';

    }
    this.projectProfilePicDoc.nativeElement.value = '';
    this.filenameForuserProfile = '';

  }

  cancel() {
    this.utilsService.hideModal('createProjectModal');
    this.projectObj = new Project();
    this.projectProfilePicDoc.nativeElement.value = '';
    this.filenameForuserProfile = '';

    // this.url = 'assets/images/companies/img-1.png';
    // this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';

  }

  openCreateProjectModal() {
    this.selectedIndex = 0;
    this.status = 'Add';
    this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';
    this.utilsService.openModal('createProjectModal');
    this.applyCreateProjectValidation();
  }

  editProject(projectObj) {
    this.selectedIndex = 0;
    this.status = 'Edit';
    this.applyCreateProjectValidation();
    this.projectObj = Deserialize(projectObj, Project);
    if (this.utilsService.isNullUndefinedOrBlank(this.projectObj.projectImgUrl)) {
      this.projectObj.projectImgUrl = 'assets/images/companies/img-1.png';
    }
    this.projectObj.users = projectObj.users;
    console.log(projectObj.users);
    console.log(this.projectObj.projectImgUrl);
    this.utilsService.openModal('createProjectModal');
  }
  deleteProject(index) {
    this.arrayOfProjects.splice(index, 1);
  }
}
