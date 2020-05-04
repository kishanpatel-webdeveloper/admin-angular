import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-angular';

  constructor(){
    const theme = localStorage.getItem('data-theme');
    if (theme === 'light') {
      document.body.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');

    }
  }
}
