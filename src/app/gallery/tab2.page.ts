import { Component, OnInit } from '@angular/core';

declare function imageuploadify();
declare var $: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input[type="file"]').imageuploadify();
  }

}
