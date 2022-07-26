import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { RobotComponent } from '../robot/robot.component';
import { MatSnackBarModule, MatDialogModule, MatIconModule } from '@angular/material';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, RobotComponent ],
      imports: [MatSnackBarModule, MatDialogModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
