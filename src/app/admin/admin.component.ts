import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor(@Inject(DOCUMENT) document, r: Renderer2) {
    const theme = localStorage.getItem('data-theme');
    if (theme === 'light') {
      this.checked = false;
      // document.body.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      this.checked = true;
      // document.body.setAttribute('data-theme', 'dark');

    }
  }

  changeTheme() {
    this.checked = !this.checked;
    if (this.checked === false) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    } else if (this.checked === true) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }
  }

  ngOnInit() {
    this.loadScript('../assets/js/metisMenu.min.js');
     this.loadScript('../assets/js/app.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
