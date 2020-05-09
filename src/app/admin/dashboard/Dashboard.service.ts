import { Injectable, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // color: ThemePalette = 'accent';
  // checked = false;
  // disabled = false;
  flagForHideShowGridView: boolean;
  arrayOfProjects: Array<Project> = new Array<Project>();
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

}
