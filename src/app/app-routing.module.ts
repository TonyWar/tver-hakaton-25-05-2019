import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OlderRegistryComponent } from './components/older-registry/older-registry.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { OlderComponent } from './profile/older/older.component';
import { AdminComponent } from './profile/admin/admin.component';
import { HelperComponent } from './profile/helper/helper.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin/add_older', component: OlderRegistryComponent },
  { path: 'admin/add_task', component: AddTaskComponent },
  { path: 'older/profile', component: OlderComponent },
  { path: 'older/profile/:olderId', component: OlderComponent },
  { path: 'admin/profile', component: AdminComponent },
  { path: 'helper/profile', component: HelperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
