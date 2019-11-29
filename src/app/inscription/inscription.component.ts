import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }



}
