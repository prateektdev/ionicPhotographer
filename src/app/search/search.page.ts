import { Component, OnInit } from '@angular/core';

declare function initMap();

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
    initMap();
  }

}
