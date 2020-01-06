import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from '../app.component';
import {ProfileComponent} from '../profile/profile.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}
