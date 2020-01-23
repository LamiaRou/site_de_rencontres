import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mm = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register(user) {
    user.description = 'jjjjjj';
    user.image = '';
    user.email = this.email.value;
    this.authService.existanceMail(user.email).then((result) => {
      if (result === null) {
        this.authService.register(user).then((value: any) => {
          if (value === null) {
            console.log('not_found');
          } else {
            console.log('login :', value);
            this.router.navigate(['user/:', {id: value.access_token}]);
          }
          console.log(user.fname);
        });
      } else {
        this.mm = 'This email already exists';
      }
    });


  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  hide = true;
}
