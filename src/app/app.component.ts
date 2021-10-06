import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-project';
  listElements = [{type: "newListItem", name: "Test item", year: "1999", content: "Test content" }];

  onListElementAdded(listElementData: { newListItem: string, 
    newListItemYear: string, newListItemContent: string } ) {
    if (listElementData.newListItem && listElementData.newListItemContent) {
      this.listElements.push({
        type: 'newListItem',
        name: listElementData.newListItem,
        year: listElementData.newListItemYear,
        content: listElementData.newListItemContent
      });
    }
  }; 

  deleteItem(index: number) {
    this.listElements.splice(index, 1);
  }

}
