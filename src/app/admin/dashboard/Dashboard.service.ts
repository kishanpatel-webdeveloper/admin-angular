import { Injectable, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from '../../models/Project';
import { User } from '../../models/user';
import { UtilsService } from '../../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // color: ThemePalette = 'accent';
  // checked = false;
  // disabled = false;
  createProjectForm: FormGroup;
  flagForHideShowGridView: boolean;
  arrayOfProjects: Array<Project> = new Array<Project>();
  projectObj = new Project();
  arrayOfUsers: Array<User> = new Array<User>();
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

  constructor(@Inject(DOCUMENT) document, r: Renderer2, public utilsService: UtilsService, public formBuilder: FormBuilder) {
    this.flagForHideShowGridView = false;

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
    }
  }

  createProject() {
    this.utilsService.hideModal('createProjectModal');
    this.arrayOfProjects.push(this.projectObj);
    this.projectObj = new Project();
  }

}
