import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';

const myRoute:Routes = [
  {
    path:"",
    component:LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeEntryComponent,

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
