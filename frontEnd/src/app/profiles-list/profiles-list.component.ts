import {Component, OnInit} from '@angular/core';
import {ProfilesService} from '../service/profiles.service';
import {ProfilePreview} from './profile-preview'

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  selectedProfiles = {};
  profiles: any[];

  Select(profilePreview: ProfilePreview) {
    this.profilesService.toggleProfileSelected(profilePreview);
  }

  constructor(private profilesService: ProfilesService) {
  }

  ngOnInit() {

    console.log('init');
    this.profilesService.getAll().subscribe(
      profiles => {
        this.profiles = profiles;
        console.log(this.profiles);

      },
      error => console.log(error)
    );

    this.profilesService.selectedProfiles$.subscribe((selectedProfiles) => {
      this.selectedProfiles = selectedProfiles.reduce((acc, current) => {
        acc[current] = true;
        return acc;
      }, {});
      console.log(this.selectedProfiles);
    });
  }

}
