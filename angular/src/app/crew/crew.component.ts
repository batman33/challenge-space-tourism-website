import { Component, OnInit } from '@angular/core';
import { CrewService, ICrewItem } from "../crew.service";

@Component({
  selector: 'app-crew',
  moduleId: 'page',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  items: ICrewItem[] = [];
  active: number = 0;
  activeItem?: ICrewItem;

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    window.document.body.classList.add("crew");

    this.items = this.crewService.getItems();
    this.activeItem = this.items[this.active];
  }

  ngOnDestroy(): void {
    window.document.body.classList.remove("crew");
  }

  change(index: number) {
    this.active = index;
    this.activeItem = this.items[this.active];
  }
}
