import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MyMaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {AuthService} from './service/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import {ProfilesService} from './service/profiles.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProfilesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile/:id', component: ProfileComponent},
      {path: 'profiles', component: ProfilesListComponent},
    ]),
  ],
  providers: [AuthService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
