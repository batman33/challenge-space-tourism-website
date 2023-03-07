import { Component, OnInit } from '@angular/core';
import { DestinationService, IDestinationItem } from "../destination.service";

@Component({
  selector: 'app-destination',
  moduleId: 'page',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  items: IDestinationItem[] = [];
  active: number = 0;
  activeItem?: IDestinationItem;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    window.document.body.classList.add("destination");

    this.items = this.destinationService.getItems();
    this.activeItem = this.items[this.active];
  }

  ngOnDestroy(): void {
    window.document.body.classList.remove("destination");
  }

  change(index: number) {
    this.active = index;
    this.activeItem = this.items[this.active];
  }
}
