import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//*****     CUSTOM COMPONENT    *****/
import { BoardComponent } from './components/board/board.component';
import { RobotComponent } from './components/robot/robot.component';
import { MessageAlertComponent } from './components/message-alert/message-alert.component';
import { InfoComponent } from './components/info-modal/info-modal.component';

//*****     MATERIAL COMPONENT    *****/
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RobotComponent,
    MessageAlertComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageAlertComponent, InfoComponent]
})
export class AppModule { }
