import { Injectable } from '@angular/core';

import data from './data.json';

export interface ICrewItem {
  name: string;
  images: {
    png: string;
    webp: string;
  },
  role: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  items: ICrewItem[] = [];

  constructor() {
    this.items = data.crew;
  }

  getItems(): ICrewItem[] {
    return this.items;
  }
}
