import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'info',
    template: `<h1 mat-dialog-title>Rules</h1>
                <hr>
                <div mat-dialog-content>
                    <div class="mt-1">The robot moves via keyboard commands.</div>
                    <div class="mt-1">PLACE button will put the toy robot on the table in starting position in south west corner.</div>
                    <div class="mt-1">UP arrow will move the toy robot one unit forward in the direction it is currently facing.</div>
                    <div class="mt-1">LEFT and RIGHT arrows will rotate the robot 90 degrees in the specified direction.</div>
                    <div class="mt-1">REPORT button will show position of the robot and the direction it is currently facing.</div>
                </div>
                <div mat-dialog-actions>
                    <button mat-raised-button color="warn" (click)="close()">Close</button>
                </div>`,
    styles: [`
               .mt-1 {
                margin-top: 0.5rem;
               }
    `]
})
export class InfoComponent{

  constructor(private dialog: MatDialog) { }

  close() {
    this.dialog.closeAll();
  }

}
