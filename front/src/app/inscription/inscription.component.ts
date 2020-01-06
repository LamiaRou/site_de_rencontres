import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material'
import {AppComponent} from '../app.component';
import {HttpClient} from "@angular/common/http";
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<AppComponent>,
        //@Inject(MAT_DIALOG_DATA) public data: DialogData
        private authservice: AuthService) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }


    onRegister(user) {
        console.log(user);
        this.authservice.onRegister(user);
}
}
