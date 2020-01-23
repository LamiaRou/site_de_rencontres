import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfilesService} from '../service/profiles.service';

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

  constructor(private profilesService: ProfilesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.profilesService.getProfile(this.route.snapshot.params.id).then(value => {
      console.log('profile : ', value);
      this.profile = value;
    });
  }
}
