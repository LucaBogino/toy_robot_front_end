import { Component, HostListener, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Compass } from 'src/app/consts/compass';
import { InfoComponent } from '../info-modal/info-modal.component';
import { MessageAlertComponent } from '../message-alert/message-alert.component';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterContentChecked {

  board = new Array(25);

  robotPosition: number = undefined;

  defaultPosition: number = 0;
  userChangePosition: string = '';

  showReport: boolean = false;

  way: string;

  constructor(private changeDetector: ChangeDetectorRef, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngAfterContentChecked() : void {
    this.changeDetector.detectChanges();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.userChangePosition = event.key;
  }

  start() {
    this.robotPosition = 20;
    this.defaultPosition = 0;
    this.way = Compass.SOUTH;
  }

  moveRobot(degrees: number) {
    switch(degrees) {
      case 0:
        if(this.robotPosition < 20)this.robotPosition = this.robotPosition + 5;
        else this.openMessage();
      break;
      case 90:
      case -270:
        if(this.robotPosition !== 0 && this.robotPosition % 5 !== 0) this.robotPosition = this.robotPosition - 1;
        else this.openMessage();
      break;
      case -90:
      case 270:
        if(this.robotPosition === 4 ||
          this.robotPosition === 9 ||
          this.robotPosition === 14 ||
          this.robotPosition === 19 ||
          this.robotPosition === 24) this.openMessage();
        else this.robotPosition = this.robotPosition + 1;
      break;
      case 180:
      case-180:
        if(this.robotPosition > 4)this.robotPosition = this.robotPosition - 5;
        else this.openMessage();
      break;
    }

    this.userChangePosition = '';
    this.defaultPosition = degrees;
  }

  openMessage() {
    this.snackBar.openFromComponent(MessageAlertComponent, {
      duration: 2500,
      data: "Danger! don't make me fall off the board",
    });
  }

  openInfoModal() {
    this.dialog.open(InfoComponent);
  }

}
