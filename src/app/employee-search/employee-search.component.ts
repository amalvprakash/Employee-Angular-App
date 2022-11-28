import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  search = ""

  Search = () => {
    let data:any = {
      "search":this.search
    }
    console.log(data)
  }
}
