import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    window.document.body.classList.add("home");
  }

  ngOnDestroy(): void {
    window.document.body.classList.remove("home");
  }

}
