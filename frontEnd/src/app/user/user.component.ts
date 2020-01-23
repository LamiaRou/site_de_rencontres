import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile: any = {
    id: 0,
    name: '',
    image: ''
  };
  panelOpenState = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.authService.getUser(this.route.snapshot.params.id).then(value => {
      console.log('user : ', value);
      this.profile = value;
    });
  }

  profiles_direct() {
    this.router.navigate(['profiles']);
  }
}
