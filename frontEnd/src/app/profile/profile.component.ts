import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: any = {
    id: 0,
    email: 0,
    password: ''
  };

  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.authService.getProfile(this.route.snapshot.params.id).then(value => {
      console.log('profile : ', value);
      this.user = value;
    });
  }
}
