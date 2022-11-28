import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {
  delete = ""

  Delete = () => {
    let data:any = {
      "delete":this.delete
    }
    console.log(data)
  }
}
