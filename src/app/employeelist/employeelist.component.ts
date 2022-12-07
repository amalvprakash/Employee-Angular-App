import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  
  constructor(private api:ApiService){
    api.fetchEmployee().subscribe(
      (response)=>{
        this.data = response;
      }
    )
  }

  data:any = []
 
}
