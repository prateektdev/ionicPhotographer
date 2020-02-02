import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadderBoardPageRoutingModule } from './ladder-board-routing.module';

import { LadderBoardPage } from './ladder-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadderBoardPageRoutingModule
  ],
  declarations: [LadderBoardPage]
})
export class LadderBoardPageModule {}
