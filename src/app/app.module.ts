import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';

const myRoute:Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"entry",
    component:EmployeeEntryComponent
  },
  {
    path:"list",
    component:EmployeelistComponent
  },
  {
    path:"search",
    component:EmployeeSearchComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeEntryComponent,
    EmployeelistComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
