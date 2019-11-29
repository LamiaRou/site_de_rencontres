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
  openDialogConnexion(): void {
    const dialogRef = this.dialog.open(ConnexionComponent, {
      width : "400px",
      height : "600px",
    
      backdropClass: 'backdropBackground'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  
  }

  openDialogInscription(): void {
    const dialogRef = this.dialog.open(InscriptionComponent, {
      width : "400px",
      height : "600px",


    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  
  }
}
