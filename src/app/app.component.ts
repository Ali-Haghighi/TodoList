import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-App';
  todoItem: string = '';
  headerData: string = 'all';
 
  //use showdata to final show of our list in deffrent condition
  allList: { isActive: boolean; doItem: string }[] = [];
  showData: { isActive: boolean; doItem: string }[] = this.allList;

  //method that get data from header and check the value to display
  headerDataHandler(dataHeader: { data: string }) {
    this.headerData = dataHeader.data;
    if (this.headerData === 'all') {
      this.showData = this.allList;
    } else if (this.headerData === 'active') {
      this.showData = this.allList.filter((value) => value.isActive);
    } else if (this.headerData === 'complete') {
      this.showData = this.allList.filter((value) => !value.isActive);
    }
  }

  //method that push item to allLIst arrey when add button pressed
  todoAdd() {
    this.allList.push({
      isActive: true,
      doItem: this.todoItem,
  
    });
    this.todoItem = '';
  }
  //method that give data from emmiter on <toDo-item component>
  checkBoxHandler(boxstate: { checkBoxState: boolean; doItem: string }) {
    this.allList.forEach((val, index) => {
      {
        
        val.doItem === boxstate.doItem ? val.isActive=!val.isActive : undefined;
      }
    });

    this.headerDataHandler({ data: this.headerData }); //call headerdatahandler to update state whene check box click
  }
  removeItemHandler(item: { removeItem: string }) {
    this.allList.forEach((val, index) => {
      {
        val.doItem === item.removeItem
          ? this.allList.splice(index, 1)
          : undefined;
      }
    });
    this.headerDataHandler({ data: this.headerData }); //call headerdatahandler to update state whene check box click
  }
}
