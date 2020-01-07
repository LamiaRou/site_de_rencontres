import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status = false;

  constructor(private http: HttpClient) {
  }

  async login(user: any) {
    return await new Promise(((resolve) => {
      this.http.post('http://localhost:3000/auth/login', user).subscribe(
        (val) => {
          console.log('POST call successful value returned in body : ', val);
          resolve(val);
        },
        (response) => {
          console.log('POST call in error', response);
          resolve({status: 401});
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
    }));
  }

  async register(user: any) {
    return await new Promise(((resolve) => {
      this.http.post('http://localhost:3000/auth/register', user).subscribe(
        (val) => {
          console.log('POST call successful value returned in body : ', val);
          this.status = true;
          resolve(val);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
    }));
  }


  async getProfile(id) {
    const headers = {headers: new HttpHeaders({Authorization: 'Bearer ' + id})};
    return await new Promise((resolve) => {
      this.http.get('http://localhost:3000/auth/profile/', headers).subscribe(value => {
        console.log('service : ', value);
        resolve(value);
      });
    });
  }
}
