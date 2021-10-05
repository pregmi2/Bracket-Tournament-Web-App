import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserEditorComponent } from "./user-editor/user-editor.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { groupTableComponent } from './group-table/group-table.component';
import { groupEditorComponent } from './group-editor/group-editor.component';
import { tournamentManagerComponent } from './tournament-manager/tournament-manager.component';
import { SignupComponent } from './signup/signup.component';

const routing = RouterModule.forChild([
  {path: 'auth' , component: AuthComponent },
  {path: 'signup', component: SignupComponent, data: {title: 'Create an Account'}},
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'users/:mode/:id', component: UserEditorComponent, data: {title: 'Edit User'},canActivate: [AuthGuard] },
      {path: 'users/:mode', component: UserEditorComponent, data: {title: 'Add User'},canActivate: [AuthGuard]},
      {path: 'users', component: UserTableComponent, data: {title: 'User List'} ,canActivate: [AuthGuard]},
      
      {path: 'group/:mode/:id', component: groupEditorComponent, data: {title: 'Edit group'},canActivate: [AuthGuard] },
      {path: 'group/:mode', component: groupEditorComponent, data: {title: 'Add group'},canActivate: [AuthGuard]},
      {path: 'group', component: groupTableComponent, data: {title: 'group List'} ,canActivate: [AuthGuard]},
      {path: 'tournaments', component: tournamentManagerComponent, data: {title: 'tournament'},canActivate: [AuthGuard] },
      {path: 'tournaments/:mode', component: tournamentManagerComponent, data: {title: 'Add tournament'},canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'home' },
    ],
  },
  {path : '**' , redirectTo: 'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule , routing],
    providers: [AuthGuard],
    declarations:[AuthComponent, AdminComponent, UserEditorComponent, UserTableComponent, groupTableComponent, groupEditorComponent, tournamentManagerComponent, SignupComponent]
})

export class AdminModule {}