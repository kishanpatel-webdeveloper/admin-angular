import { Component, OnInit } from '@angular/core';
import { FullCalendarService } from './Full-Calendar.service';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent extends FullCalendarService implements OnInit {


  ngOnInit() {
  }

}
