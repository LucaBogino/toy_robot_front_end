import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'message-alert',
    template: `<span class="message">
                  {{message}}
              </span>`,
    styles: [`
                ::ng-deep.mat-snack-bar-container{
                  background: linear-gradient(-20deg, #fe534c 0%, #ff9a44 100%) !important;
                  margin: 0 auto;
                  margin-bottom: 0.5rem;
              }

              .message{
                  color: white;
              }
    `]
})
export class MessageAlertComponent{

  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: string) { }

}
