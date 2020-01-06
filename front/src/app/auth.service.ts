import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

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

onRegister(user) {
        
  if(user.password != user.password_confirm){
      console.log('les deux mots de passes dont differents');
  }

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
