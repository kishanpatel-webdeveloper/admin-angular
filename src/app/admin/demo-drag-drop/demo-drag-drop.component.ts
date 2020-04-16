import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from 'src/app/models/column.model';
import { Card } from '../../models/card';

@Component({
  selector: 'app-demo-drag-drop',
  templateUrl: './demo-drag-drop.component.html',
  styleUrls: ['./demo-drag-drop.component.css']
})
export class DemoDragDropComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column(1, 'TO DO ', new Array<Card>()),
    new Column(2, 'IN PROGRESS', new Array<Card>()),
    new Column(3, 'IN REVIEW', new Array<Card>()),
    new Column(4, 'DONE', new Array<Card>())
  ]);

  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
