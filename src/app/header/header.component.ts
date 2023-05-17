import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerData:string='all';
  @Output() emitHeaderData = new EventEmitter<{data:string}>;
  pageHandler(data: string) {
    this.headerData=data;
    this.emitHeaderData.emit({data:this.headerData})
  }
}
