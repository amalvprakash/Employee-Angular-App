import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  constructor(private api:ApiService){}

  empCode=""
  searchData:any = []

  Search = () => {
    let data:any = {
      "empCode":this.empCode
    }
    this.api.search(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("Employee Not Found!!!")
        } else {
          this.searchData = response;
        }
      }
    )
  }

  deleteBtnClick = (id:any) =>{
    let data:any ={
      "id":id 
  }
  this.api.delete(data).subscribe(
    (response:any)=>{
      console.log(response)
      if("status"=="status"){
        alert("deleted")
        this.searchData
        id =""
      }else{
        alert("something went wrong")
      }

    }
    
  )
  }
}
