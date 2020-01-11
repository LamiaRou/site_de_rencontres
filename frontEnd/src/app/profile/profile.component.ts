import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: any = {
    id: 0,
    name: 0,
    image: ''
  };

  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.authService.getProfile(this.route.snapshot.params.id).then(value => {
      console.log('profile : ', value);
      this.profile = value;
    });
  }
}
