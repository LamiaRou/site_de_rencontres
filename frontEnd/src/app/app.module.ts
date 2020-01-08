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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
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
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
