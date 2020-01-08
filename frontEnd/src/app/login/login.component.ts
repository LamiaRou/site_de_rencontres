import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from "@angular/router";
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(user) {
    user.email = this.email.value;
    console.log(user)
    this.authService.login(user).then((value: any) => {
      console.log('login :', value);
      if (value.status === 401) {
        this.status = 'not found';
      } else {
        this.router.navigate(['profile/:', {id: value.access_token}]);
      }
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
