import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfilComponent } from './profil/profil.component';



const appRoutes: Routes = [
  { path:'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const routingComponent =[ProfilComponent]