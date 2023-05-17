import { BrowserPlatformLocation } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Input,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  //create emmiter to send check box state to app component
  @Output() emmitcheckstate = new EventEmitter<{
    checkBoxState: boolean;
    doItem: string;
  }>();
  //create emmiter for send index of data that want to be deleted
  @Output() emitremoveItem = new EventEmitter<{ doItemremove: string }>();
  //get input from app component
  @Input() item: { isActive: boolean; doItem: string } = {
    isActive: false,
    doItem: '',
  };

  // method to send check Box state to app component and change its isActive state
  checkBoxHandler() {
    this.emmitcheckstate.emit({
      checkBoxState: !this.item.isActive,
      doItem: this.item.doItem, //emit doitem to find which check box checked via doitem value
    });
  }
  removeItemfunc() {
    this.emitremoveItem.emit({
      doItemremove: this.item.doItem, //emit doitem to find which check box checked via doitem value
    });
  }
}
