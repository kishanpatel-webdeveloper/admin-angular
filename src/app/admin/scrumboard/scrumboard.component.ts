import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { Column } from 'src/app/models/column.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  board: Board = new Board('Test Board', [
    new Column(1, 'Backlog', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column(2, 'Hot Backlog', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column(3, 'Inprogress', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column(4, 'Ready to Diploy', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);
  description: string;
  listNgModel: string;
  cardTitle: string;
  indexOfList: number;
  flagForHideShowAddListButton: boolean;
  userList: string[] = ['Dhrumin', 'Kishan', 'Brijesh', 'Preyash'];
  constructor(public utilsService: UtilsService) {

  }
  ngOnInit() {
  }
  addList() {
    if (this.listNgModel) {
      const id = this.board.columns.length + 1;
      this.board.columns.push(new Column(id, this.listNgModel, []));
      this.flagForHideShowAddListButton = false;
    }
  }
  cancelAddList() {
    this.flagForHideShowAddListButton = false;
    this.listNgModel = undefined;
  }

  openCreateModal(index, modalId) {
    this.indexOfList = index;
    this.utilsService.openModal(modalId);
  }

  createCard() {
    if (this.cardTitle) {
      this.board.columns[this.indexOfList].tasks.push(this.cardTitle);
      this.cardTitle = undefined;
      this.utilsService.hideModal('createListModal');
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  // dropCard(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  // }


  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.board.columns.map(x => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

}
