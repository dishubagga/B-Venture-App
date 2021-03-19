import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/services/auth-guard/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signIn' },
  { path: 'signIn', component: SignInComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
