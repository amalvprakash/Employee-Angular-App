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
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  },
  {
    path:"edit",
    component:EditEmployeeComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
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
    EditEmployeeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
