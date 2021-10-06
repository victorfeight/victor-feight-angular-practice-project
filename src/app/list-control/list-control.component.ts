import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit {

  newListItem: string = '';
  newListItemYear: string = '';
  newListItemContent: string = '';

  // Emitting our own event, make it listenable from outside (PASS EVENT OUT OF THE COMPONENT)
  @Output('itemCreated') listElementCreated = new EventEmitter<{newListItem: string, newListItemYear: string, newListItemContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddListElement() {
    this.listElementCreated.emit({newListItem: this.newListItem, 
      newListItemYear: this.newListItemYear, 
      newListItemContent: this.newListItemContent});
  }

}
