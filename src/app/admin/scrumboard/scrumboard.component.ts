import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Board } from '../../models/board.model';
import { Column } from 'src/app/models/column.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UtilsService } from '../../services/utils.service';
import { Card } from '../../models/card';
import { User } from '../../models/user';
import { Deserialize, serializeAs, Serialize } from 'cerialize';
import { Status } from '../../models/status';
import { startOfDay, endOfDay } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { addProjectModal } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit, OnDestroy {

  board: Board = new Board('Test Board', [
    new Column(1, 'TO DO ', new Array<Card>()),
    new Column(2, 'IN PROGRESS', new Array<Card>()),
    new Column(3, 'IN REVIEW', new Array<Card>()),
    new Column(4, 'DONE', new Array<Card>())
  ]);

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  modalData: {
    action: string;
    event: any;
  };
  description: string;
  listNgModel: string;
  cardTitle: string;
  indexOfList: number;
  flagForHideShowAddListButton: boolean;
  cardObj = new Card();
  cardIndex: number;
  userList: Array<User> = new Array<User>();
  statusList: Array<Status> = new Array<Status>();
  todayDate = new Date();
  arrayOfEvents = [];
  constructor(public utilsService: UtilsService, public dialog: MatDialog, public datepipe: DatePipe) {
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

    const obj = new Card();
    obj.name = 'New Design';
    obj.status = 'TO DO';
    obj.taskDate = new Date();
    this.board.columns[0].tasks.push(obj);
    this.createCalendarEvent(obj);
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    localStorage.setItem('CalendarEvents', JSON.stringify(this.arrayOfEvents));
  }
  addList() {
    if (this.listNgModel) {
      const id = this.board.columns.length + 1;
      this.board.columns.push(new Column(id, this.listNgModel, []));
      this.flagForHideShowAddListButton = false;
      this.utilsService.toasterService.success('List Added Successfully.', '', {
        positionClass: 'toast-top-right',
        closeButton: true
      });
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
      obj.taskDate = new Date();
      obj.status = this.board.columns[this.indexOfList].name;
      this.board.columns[this.indexOfList].tasks.push(obj);
      this.createCalendarEvent(obj);
      this.cardTitle = undefined;
      this.utilsService.hideModal('createListModal');
      this.utilsService.toasterService.success('Card Created Successfully', '', {
        positionClass: 'toast-top-right',
        closeButton: true
      });
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
    this.utilsService.toasterService.success('Card Updated Successfully.', '', {
      positionClass: 'toast-top-right',
      closeButton: true
    });
    this.utilsService.hideModal('createCardModal');

  }
  // onCoverImageSelect(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     this.utilsService.readUrl(event, response => {
  //       const blob = this.utilsService.convertBase64ToBlob(response);
  //       const fileURL = URL.createObjectURL(blob);
  //       this.cardObj.coverImageUrl = fileURL;
  //     });
  //   }
  // }
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
  createCalendarEvent(obj: Card) {
    const event = {
      title: obj.name,
      start: this.datepipe.transform(new Date(obj.taskDate), 'yyyy-MM-dd'),
      end: this.datepipe.transform(new Date(obj.taskDate), 'yyyy-MM-dd'),
      color: this.colors.blue,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    };
    const action = 'Task Events';
    this.modalData = { event, action };
    this.arrayOfEvents.push(this.modalData);
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
  updateEventDate(obj, cardIndex, listIndex) {
    const eventIndex = this.arrayOfEvents.findIndex(val => val.event.title === obj.name);
    console.log(eventIndex);
    if (eventIndex !== -1) {
      this.arrayOfEvents[eventIndex].event.start = this.datepipe.transform(new Date(obj.taskDate), 'yyyy-MM-dd');
      this.arrayOfEvents[eventIndex].event.end = this.datepipe.transform(new Date(obj.taskDate), 'yyyy-MM-dd');
    }
    console.log(this.arrayOfEvents);
  }

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

  openCreateCardDialog(index): void {
    const dialogRef = this.dialog.open(createCardModal, { disableClose: true, data: index });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
      if (!this.utilsService.isNullUndefinedOrBlank(result)) {
        this.indexOfList = index;
        this.cardTitle = result;
        this.createCard();
      }

    });
  }

  openAddCardDetailsDialog(obj, cardIndex, columnIndex) {
    this.cardObj = new Card();
    console.log(this.cardObj);


    const dialogRef = this.dialog.open(addCradDetailsModal, { disableClose: true, data: obj });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
      if (!this.utilsService.isNullUndefinedOrBlank(result)) {
        this.cardIndex = cardIndex;
        this.indexOfList = columnIndex;
        this.cardObj = result;
        this.saveCard();
      }

    });
  }

}


@Component({
  selector: 'app-create-card-modal',
  templateUrl: '../../shared/modals/modal-for-create-card.html',
})
export class createCardModal {
  cardObj = new Card();
  index: number;
  cardName: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public utilsService: UtilsService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<createCardModal>) {
    this.index = this.data;
  }

  save() {
    if (!this.utilsService.isNullUndefinedOrBlank(this.cardName)) {

      this.dialogRef.close(this.cardName);
    }
  }
  cancel() {
    this.dialogRef.close(null);
  }

}
@Component({
  selector: 'app-add-card-details-modal',
  templateUrl: '../../shared/modals/modal-for-add-card-details.html',
})
export class addCradDetailsModal {
  cardObj = new Card();
  userList: Array<User> = new Array<User>();
  statusList: Array<Status> = new Array<Status>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public utilsService: UtilsService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<addCradDetailsModal>) {
    this.cardObj = this.data;
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
  onCoverImageSelect(event) {
    if (event.target.files && event.target.files[0]) {
      this.utilsService.readUrl(event, response => {
        const blob = this.utilsService.convertBase64ToBlob(response);
        const fileURL = URL.createObjectURL(blob);
        this.cardObj.coverImageUrl = fileURL;
      });
    }
  }
  save() {
    this.dialogRef.close(this.cardObj);
  }
  cancel() {
    this.dialogRef.close(null);
  }

}

