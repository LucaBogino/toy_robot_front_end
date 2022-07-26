import { Component,
         Input,
         SimpleChanges,
         Output,
         EventEmitter, 
         ViewChild, 
         ElementRef, 
         SimpleChange, 
         OnChanges } from '@angular/core';
import { Compass } from 'src/app/consts/compass';

@Component({
  selector: 'robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css'],
  
})
export class RobotComponent implements OnChanges {

  @ViewChild('robot', {static: true}) robot: ElementRef;

  @Input()userInput;
  @Input()defaultPosition;
  @Output()changePosition = new EventEmitter();
  @Output()reset = new EventEmitter();
  @Output()changeWay = new EventEmitter();

  degrees: number = 0;

  way: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (('userInput' || 'defaultPosition') in changes) {
      if(!changes.userInput.firstChange){
        this.setDegrees(changes.userInput);
        this.robot.nativeElement.style.transform = 'rotate('+ this.degrees +'deg)';
      } else {
        this.degrees = this.defaultPosition;
        this.robot.nativeElement.style.transform = 'rotate('+ this.defaultPosition +'deg)';
      }
    }
  }

  setDegrees(arrow: SimpleChange) {
    switch(arrow.currentValue) {
      case "ArrowUp":
        this.changePosition.emit(this.degrees);
      break;
      case "ArrowLeft":
        this.degrees = this.degrees + 90;
        this.degrees = this.degrees > 270 ? 0 : this.degrees;
      break;
      case "ArrowRight":
        this.degrees = this.degrees - 90;
        this.degrees = this.degrees < -270 ? 0 : this.degrees;
      break;
    }
    this.reset.emit(null);
    this.setWay();
  }

  setWay() {
    switch(this.degrees) {
      case 0:
        this.way = Compass.SOUTH;
      break;
      case 90:
      case -270:
        this.way = Compass.WEST;
      break;
      case -90:
      case 270:
        this.way = Compass.EAST;
      break;
      case 180:
      case-180:
        this.way = Compass.NORTH;
      break;
    }
    this.changeWay.emit(this.way);
  }

}
