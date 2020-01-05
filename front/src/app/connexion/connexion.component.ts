import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material'
import {AppComponent} from '../app.component';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<AppComponent>,
        //@Inject(MAT_DIALOG_DATA) public data: DialogData
        private httpClient: HttpClient) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    onLogin(user) {
        console.log(user)
        this.httpClient.post('http://localhost:3000/auth/login', user).subscribe(
            (val) => {
                console.log('POST call successful value returned in body : ', val);
            },
            (response) => {
                console.log('POST call in error', response);
            },
            () => {
                console.log('The POST observable is now completed.');
            }
        );
    }
}
