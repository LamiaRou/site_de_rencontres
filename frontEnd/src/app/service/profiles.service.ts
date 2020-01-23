import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ProfilePreview} from '../profiles-list/profile-preview';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profiles: any[] = null;
  selectedProfiles = new BehaviorSubject<number[]>([]);
  selectedProfiles$ = this.selectedProfiles.asObservable();
  cachedProfiles: ProfilePreview[] = null;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any[]> {
    if (this.profiles) {
      return of(this.profiles);
    }
    return (this.http.get('http://localhost:3000/profile/all/') as Observable<any[]>)
      .pipe(
        map((profiles) => {
          return profiles.map((profileJson) => {
            return {
              id: profileJson.id,
              fname: profileJson.fname,
              lname: profileJson.lname,
              image: profileJson.image
            };
          });
        }), tap((profiles) => {
          this.profiles = profiles;
          console.log(profiles);
        })
      );
  }


  async getProfile(id) {
    return await new Promise((resolve) => {
      this.http.get('http://localhost:3000/profile/one/' + id).subscribe(value => {
        console.log('profile : ', value);
        resolve(value);
      });
    });
  }

  toggleProfileSelected(profilePreview: ProfilePreview) {
    let newSelectedProfiles = this.selectedProfiles.value.filter((alreadySelectedProfile) => {
      return alreadySelectedProfile !== profilePreview.id;
    });
    if (newSelectedProfiles.length === this.selectedProfiles.value.length) {
      newSelectedProfiles = [...newSelectedProfiles, profilePreview.id];
    }
    this.selectedProfiles.next(newSelectedProfiles);
  }
}
