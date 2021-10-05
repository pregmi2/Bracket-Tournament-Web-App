import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tournamentFirstGuard } from './guards/tournamentFirst.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Tournament Home Page' } },
  { path: 'login', data: {title: 'Login'} , redirectTo: '/admin/auth', pathMatch: 'full' },
  { path: 'signup', data: {title: 'Signup'} , redirectTo: '/admin/signup', pathMatch: 'full' },
  

  { path: 'users', data: {title: 'Users List'} , redirectTo: '/admin/main', pathMatch: 'full' },
  { path: 'group', data: {title: 'group List'} , redirectTo: '/admin/main', pathMatch: 'full' },
  { path: 'tournaments', data: {title: 'tournamet'} , redirectTo: '/admin/main', pathMatch: 'full' },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  { path: '**', redirectTo: '/login', pathMatch: 'full' },// TODO change here if have problem by routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[tournamentFirstGuard]
})
export class AppRoutingModule {}