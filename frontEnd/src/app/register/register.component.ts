import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register(user) {
    console.log(user);
    this.authService.register(user).then((value: any) => {
      if (value === 'not_found') {
        console.log('not_found');
      } else {
        console.log('login :', value);
        this.router.navigate(['profile/:', {id: value.access_token}]);
      }
    });
  }
}
