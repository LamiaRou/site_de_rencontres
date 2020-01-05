import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material'
import {AppComponent} from '../app.component';
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

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


    onRegister(user) {
        console.log(user);

        this.httpClient.post('http://localhost:3000/auth/register', user).subscribe(
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
