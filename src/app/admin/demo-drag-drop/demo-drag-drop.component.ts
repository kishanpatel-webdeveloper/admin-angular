import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-demo-drag-drop',
  templateUrl: './demo-drag-drop.component.html',
  styleUrls: ['./demo-drag-drop.component.css']
})
export class DemoDragDropComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column(1,'Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column(2,'Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column(3,'Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column(4,'Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
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