import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {MatDialogModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule
    
  ],
  entryComponents :[
    ConnexionComponent,
    InscriptionComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

