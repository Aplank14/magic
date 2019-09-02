import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HoursComponent } from './hours/hours.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'admin', component: AdminComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/hours',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/hours' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }