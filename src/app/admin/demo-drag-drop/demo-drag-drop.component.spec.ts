/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoDragDropComponent } from './demo-drag-drop.component';

describe('DemoDragDropComponent', () => {
  let component: DemoDragDropComponent;
  let fixture: ComponentFixture<DemoDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
