import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  edit = ""

  Edit = () => {
    let data:any = {
      "edit":this.edit
    }
    console.log(data)
  }
}
