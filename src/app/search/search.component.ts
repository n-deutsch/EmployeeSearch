import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Employee} from '../employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public employees: any = [];
  public searchResults: any = [];
  public employee: Employee = null;
  public selectedId = -1;

  public searchName = "";
  public searchEmail = "";
  public searchPhone = "";
  public searchCountry = "";
  public searchState = "";
  public searchCity = "";

  constructor(private appSvc: AppServiceService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.appSvc.getPeople().then((data =>{
      this.employees = data;
    }));
  }

  public searchClick(){
    //create a copy of employeees
    var tempEmployees = this.employees;
    this.employees = [];
    
    //for each entry in 'employees'...
    for(var e in tempEmployees){
      //check name
      if(this.searchName != ""){
        //if(!e.Name.includes(this.searchName))
          //continue;
      }
      //check email
      if(this.searchEmail!= ""){

      }
      //check phone
      if(this.searchPhone!=""){

      }
      //check country
      if(this.searchCountry!=""){

      }
      //check state
      if(this.searchState!=""){

      }
      //check city
      if(this.searchCity!=""){
        
      }
      this.employees.add(e);
    }
  }
}
