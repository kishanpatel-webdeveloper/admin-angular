import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { Column } from 'src/app/models/column.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UtilsService } from '../../services/utils.service';
import { Card } from '../../models/card';
import { User } from '../../models/user';
import { Deserialize, serializeAs, Serialize } from 'cerialize';
import { Status } from '../../models/status';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  board: Board = new Board('Test Board', [
    new Column(1, 'TO DO ', new Array<Card>()),
    new Column(2, 'IN PROGRESS', new Array<Card>()),
    new Column(3, 'IN REVIEW', new Array<Card>()),
    new Column(4, 'DONE', new Array<Card>())
  ]);
  description: string;
  listNgModel: string;
  cardTitle: string;
  indexOfList: number;
  flagForHideShowAddListButton: boolean;
  cardObj = new Card();
  cardIndex: number;
  userList: Array<User> = new Array<User>();
  statusList: Array<Status> = new Array<Status>();
  constructor(public utilsService: UtilsService) {
    const statusObj1 = new Status();
    statusObj1.id = '1';
    statusObj1.name = 'High Priority';
    statusObj1.color = '#f6c344';
    const statusObj2 = new Status();
    statusObj2.id = '2';
    statusObj2.name = 'Blocked';
    statusObj2.color = '#e15241';
    const statusObj3 = new Status();
    statusObj3.id = '3';
    statusObj3.name = 'Approved';
    statusObj3.color = '#67ac5c';
    const statusObj4 = new Status();
    statusObj4.id = '4';
    statusObj4.name = 'Ready';
    statusObj4.color = '#55bad1';
    const statusObj5 = new Status();
    statusObj5.id = '5';
    statusObj5.name = 'Deployed';
    statusObj5.color = '#9035aa';

    this.statusList.push(statusObj1);
    this.statusList.push(statusObj2);
    this.statusList.push(statusObj3);
    this.statusList.push(statusObj4);
    this.statusList.push(statusObj5);
    const userObj1 = new User();
    userObj1.id = '1';
    userObj1.name = 'Dhrumin';
    userObj1.profileImg = 'assets/images/users/avatar-6.jpg';

    const userObj2 = new User();
    userObj2.id = '2';
    userObj2.name = 'Kishan';
    userObj2.profileImg = 'assets/images/users/avatar-2.jpg';

    const userObj3 = new User();
    userObj3.id = '3';
    userObj3.name = 'Brijesh';
    userObj3.profileImg = 'assets/images/users/avatar-3.jpg';

    const userObj4 = new User();
    userObj4.id = '4';
    userObj4.name = 'Preyash';
    userObj4.profileImg = 'assets/images/users/avatar-7.jpg';
    this.userList.push(userObj1);
    this.userList.push(userObj2);
    this.userList.push(userObj3);
    this.userList.push(userObj4);

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
      const obj = new Card();
      obj.name = this.cardTitle;
      obj.status = this.board.columns[this.indexOfList].name;
      this.board.columns[this.indexOfList].tasks.push(obj);
      this.cardTitle = undefined;
      this.utilsService.hideModal('createListModal');
    }
  }

  userSelect(event) {
    console.log(event.source.selected);
    if (event.source.selected) {
      console.log(this.cardObj.members);
    }
  }

  saveCard() {
    console.log(this.cardObj.members);
    this.board.columns[this.indexOfList].tasks[this.cardIndex] = new Card();
    this.board.columns[this.indexOfList].tasks[this.cardIndex] = this.cardObj;
    this.cardObj = new Card();
    this.utilsService.hideModal('createCardModal');

  }
  onCoverImageSelect(event) {
    if (event.target.files && event.target.files[0]) {
      this.utilsService.readUrl(event, response => {
        const blob = this.utilsService.convertBase64ToBlob(response);
        const fileURL = URL.createObjectURL(blob);
        this.cardObj.coverImageUrl = fileURL;
      });
    }
  }
  compareFn(user1: User, user2: User) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }
  openCardModal(obj, cardIndex, columnIndex) {
    this.cardObj = new Card();
    this.cardObj = obj;
    console.log(this.cardObj);

    this.cardIndex = cardIndex;
    this.indexOfList = columnIndex;
    this.utilsService.openModal('createCardModal');
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
