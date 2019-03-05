import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Property } from '../property';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
	@Input() list: Property[];
	@Output() propertySelected = new EventEmitter<Property>();
  constructor() { }

  ngOnInit() {
  }

  selectProperty(id) {
		this.propertySelected.emit(id);
  }

}
