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
import {AuthGuard} from './service/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import {ProfilesService} from './service/profiles.service';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProfilesListComponent,
    UserComponent,
    HomeComponent
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
    MatExpansionModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profiles', canActivate: [AuthGuard],component: ProfilesListComponent},
      {path: 'profiles/:id', component: ProfileComponent},
      {path: 'user/:id', component: UserComponent},
    ]),
  ],
  providers: [AuthService, ProfilesService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {
}
