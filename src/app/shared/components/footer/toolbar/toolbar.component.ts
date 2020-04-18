import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';
import { StorageListnerService } from '../../../../services/storage-listner.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public utilsService: UtilsService, public storageListnerService: StorageListnerService) { }

  ngOnInit() {
  }

}
