import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {
  empCode=""
  name=""
  dsgn=""
  salary=""
  companyName=""
  mobileNumber=""
  // username=""
  // password=""

  constructor(private api:ApiService){}
  readValues =() =>{
    let data:any ={
      "empCode":this.empCode,
      "name":this.name,
      "dsgn":this.dsgn,
      "salary":this.salary,
      "companyName":this.companyName,
      "mobileNumber":this.mobileNumber,
      // "username":this.username,
      // "password":this.password
    }
    this.api.addEmployee(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Patients Added SuccessFully")
         
         
        } else {
          alert("Something went wrong!!!")
        }
      }
    )
  }
  }

