import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadderBoardPage } from './ladder-board.page';

const routes: Routes = [
  {
    path: '',
    component: LadderBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadderBoardPageRoutingModule {}
