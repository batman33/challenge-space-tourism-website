import { Injectable } from '@angular/core';

import data from './data.json';

export interface IDestinationItem {
  name: string;
  images: {
    png: string;
    webp: string;
  },
  description: string;
  distance: string;
  travel: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  items: IDestinationItem[] = [];

  constructor() {
    this.items = data.destinations;
  }

  getItems(): IDestinationItem[] {
    return this.items;
  }
}
