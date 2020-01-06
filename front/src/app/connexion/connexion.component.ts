import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material'
import {AppComponent} from '../app.component';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

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

    onLogin(user) {
        console.log(user);
        this.authservice.onLogin(user);

    }
}
