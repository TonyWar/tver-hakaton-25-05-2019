import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MaterialDModule } from './material-d/material-d.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { OlderRegistryComponent } from './components/older-registry/older-registry.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AdminComponent } from './profile/admin/admin.component';
import { HelperComponent } from './profile/helper/helper.component';
import { OlderComponent } from './profile/older/older.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { TaskAccordeonComponent } from './components/task-accordeon/task-accordeon.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { HelperCardComponent } from './components/helper-card/helper-card.component';
import { DragUserComponent } from './components/drag-user/drag-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    OlderRegistryComponent,
    AddTaskComponent,
    AdminComponent,
    HelperComponent,
    OlderComponent,
    ProfileCardComponent,
    TaskAccordeonComponent,
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    HelperCardComponent,
    DragUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
