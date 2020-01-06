import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {MatDialogModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {RoutingModule} from "./routing/routing.module";


@NgModule({
    declarations: [
        AppComponent,
        InscriptionComponent,
        ConnexionComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule,
        FormsModule,
        RoutingModule
    ],
    entryComponents: [
        ConnexionComponent,
        InscriptionComponent
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

