import { Component } from '@angular/core';
import {MatDialog} from '@angular/material'
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public dialog: MatDialog) {} 

  title = 'site';
  openDialog(): void {
    const dialogRef1 = this.dialog.open(ConnexionComponent, {
    });
    const dialogRef2 = this.dialog.open(InscriptionComponent, {
    });
    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
