import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  data:any = [
    {
      "name":"amal",
      "desg":"TMG",
      "salary":25000,
      "phone":8111858402
    },
    {
      "name":"bob",
      "desg":"TMG",
      "salary":25000,
      "phone":8475487555
    },
    {
      "name":"marly",
      "desg":"TMG",
      "salary":25000,
      "phone":9333224455
    },
    {
      "name":"Charlie",
      "desg":"TMG",
      "salary":25000,
      "phone":9342323221
    },
    {
      "name":"mary",
      "desg":"TMG",
      "salary":25000,
      "phone":8456327272
    },
    {
      "name":"Ram",
      "desg":"TMG",
      "salary":25000,
      "phone":7389298388
    },
    {
      "name":"Julie",
      "desg":"TMG",
      "salary":25000,
      "phone":9897675645
    },
    {
      "name":"John",
      "desg":"TMG",
      "salary":25000,
      "phone":748774575
    }

]
  // name = "amal"
  // desg = "TMG"
  // salary = 25000
  // phone = 8111858402
  // email = "amal@nest.com"
  // companyName = "NEST"
  // yearsOfExp = .03



}
