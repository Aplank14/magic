import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HoursComponent } from './hours/hours.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent } from './editor/editor.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hours', component: HoursComponent, canActivate: [AuthGuard] },
  { path: 'edit/new', component: EditorComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: EditorComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
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
