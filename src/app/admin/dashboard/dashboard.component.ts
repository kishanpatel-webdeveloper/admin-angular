import { Component, OnInit, Inject, Renderer2 } from '@angular/core';

import { DashboardService } from './Dashboard.service';
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
