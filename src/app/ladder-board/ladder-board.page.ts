import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ladder-board',
  templateUrl: './ladder-board.page.html',
  styleUrls: ['./ladder-board.page.scss'],
})
export class LadderBoardPage implements OnInit {

  constructor() { }

  public data = [
    {
      id: 1,
      name: 'Kyle Smith',
      occupation: 'Fashion Designer'
    },
    {
      id: 2,
      name: 'Liza watson',
      occupation: 'Web Developer'
    },
    {
      id: 3,
      name: 'Emily stones',
      occupation: 'Web Designer'
    },
    {
      id: 4,
      name: 'Melissa stark',
      occupation: 'Fashion Designer'
    },
    {
      id: 5,
      name: 'Tom Roges',
      occupation: 'Web Developer'
    },
    {
      id: 2,
      name: 'Liza',
      occupation: 'Web Developer'
    }
  ];

  public tab = 'tab-1';


  ngOnInit() {
    this.data = this.data.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
    console.log(this.data);
  }

  change_class(tab: any) {
    this.tab = tab;
  }


}
