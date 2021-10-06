import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  // Exposing this property to the "world", passing properties into this component
  @Input('listElement') element: { type: string, name: string, year: string, content: string };
  @Output() deleteRequest = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteRequest.emit();
  }

}
