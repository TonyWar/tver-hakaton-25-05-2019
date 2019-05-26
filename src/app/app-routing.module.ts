import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OlderRegistryComponent } from './components/older-registry/older-registry.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { OlderComponent } from './profile/older/older.component';
import { AdminComponent } from './profile/admin/admin.component';
import { HelperComponent } from './profile/helper/helper.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { OnlyAdminGuard } from './guards/only-admin/only-admin.guard';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin/add_older', component: OlderRegistryComponent, canActivate: [AuthGuard, OnlyAdminGuard] },
  { path: 'admin/add_task', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'admin/add_task/:olderId', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'older/profile', component: OlderComponent, canActivate: [AuthGuard] },
  { path: 'older/profile/:olderId', component: OlderComponent, canActivate: [AuthGuard] },
  { path: 'admin/profile', component: AdminComponent, canActivate: [AuthGuard, OnlyAdminGuard] },
  { path: 'users', component: UsersComponent},
  { path: 'users/:role', component: UsersComponent},
  { path: 'helper/profile', component: HelperComponent, canActivate: [AuthGuard] },
  { path: 'helper/profile/:helperId', component: HelperComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent},
  { path: '**',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
