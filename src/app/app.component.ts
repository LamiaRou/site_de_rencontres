import { Component } from '@angular/core';
import {MatDialog} from '@angular/material'
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public dialog: MatDialog) {} 

  title = 'site';
  openDialog(): void {
    const dialogRef = this.dialog.open(ConnexionComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
