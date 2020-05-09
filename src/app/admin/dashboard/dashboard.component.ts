import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // color: ThemePalette = 'accent';
  // checked = false;
  // disabled = false;
  flagForHideShowGridView: boolean;
  constructor(@Inject(DOCUMENT) document, r: Renderer2) {
    this.flagForHideShowGridView = false;
    // const theme = localStorage.getItem('data-theme');
    // if (theme === 'light') {
    //   this.checked = false;
    //   // document.body.setAttribute('data-theme', 'light');
    // } else if (theme === 'dark') {
    //   this.checked = true;
    //   // document.body.setAttribute('data-theme', 'dark');

    // }
  }

  ngOnInit() {
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
