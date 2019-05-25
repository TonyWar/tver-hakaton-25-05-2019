import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OlderRegistryComponent } from './components/older-registry/older-registry.component';

const routes: Routes = [
  {path: 'sing-in', component: SignInComponent},
  {path: 'admin/add_older', component: OlderRegistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
