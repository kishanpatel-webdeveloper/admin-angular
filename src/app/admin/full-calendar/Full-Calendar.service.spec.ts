/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FullCalendarService } from './Full-Calendar.service';

describe('Service: FullCalendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullCalendarService]
    });
  });

  it('should ...', inject([FullCalendarService], (service: FullCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
