import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {
  name=""
  desg=""
  salary=""
  phone=""
  
  readValues =() =>{
    let data:any ={
      "name":this.name,
      "desg":this.desg,
      "salary":this.salary,
      "phone":this.phone
    }
    console.log(data)
  }
}
