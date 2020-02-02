import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LadderBoardPage } from './ladder-board.page';

describe('LadderBoardPage', () => {
  let component: LadderBoardPage;
  let fixture: ComponentFixture<LadderBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LadderBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
