import { Component, OnInit } from '@angular/core';
import { TechnologyService, ITechnologyItem } from "../technology.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  items: ITechnologyItem[] = [];
  active: number = 0;
  activeItem?: ITechnologyItem;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    window.document.body.classList.add("technology");

    this.items = this.technologyService.getItems();
    this.activeItem = this.items[this.active];
  }

  ngOnDestroy(): void {
    window.document.body.classList.remove("technology");
  }

  change(index: number) {
    this.active = index;
    this.activeItem = this.items[this.active];
  }
}
