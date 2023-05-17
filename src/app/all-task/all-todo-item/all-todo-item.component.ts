import { BrowserPlatformLocation } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Input,EventEmitter, Output  } from '@angular/core';
@Component({
  selector: 'app-all-todo-item',
  templateUrl: './all-todo-item.component.html',
  styleUrls: ['./all-todo-item.component.css']
})
export class AllTodoItemComponent {



  //create emmiter to send check box state to app component
  @Output() emmitcheckstate = new EventEmitter<{
    checkBoxState: boolean;
    indexOfcheckbox: number;
  }>();
  //create emmiter for send index of data that want to be deleted
  @Output() emitremoveItem = new EventEmitter<{ index: number }>();
  //get input from app component
  @Input() item: { isActive: boolean; doItem: string; index: number } = {
    isActive: false,
    doItem: '',
    index: 0,
  };

  // method to send check Box state to app component and change its isActive state
  checkBoxHandler() {
    this.emmitcheckstate.emit({
      checkBoxState: !this.item.isActive,
      indexOfcheckbox: this.item.index,
    });
  }
  removeItemfunc() {
    this.emitremoveItem.emit({
    index:this.item.index
    });
  }
}


