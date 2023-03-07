import { Injectable } from '@angular/core';

import data from './data.json';

export interface ITechnologyItem {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  }
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  items: ITechnologyItem[] = [];

  constructor() {
    this.items = data.technology;
  }

  getItems(): ITechnologyItem[] {
    return this.items;
  }
}
