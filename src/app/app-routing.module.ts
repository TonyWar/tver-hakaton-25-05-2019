import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OlderRegistryComponent } from './components/older-registry/older-registry.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin/add_older', component: OlderRegistryComponent },
  { path: 'admin/add_task', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
