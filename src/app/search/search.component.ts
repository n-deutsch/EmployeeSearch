import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Employee} from '../employee';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public employees: Employee[] = [];
  public allEmployees: Employee[] = [];

  public employee: Employee = null;
  public selectedId = -1;

  public searchName = "";
  public searchEmail = "";
  public searchPhone = "";
  public searchCountry = "";
  public searchState = "";
  public searchCity = "";

  constructor(private appSvc: AppServiceService, private activeRoute: ActivatedRoute) { }

  /*init contacts my web API and fills employees and allEmployees
  with the contents from my person_nathan database table*/
  ngOnInit() {
    this.appSvc.getPeople().then((data =>{
      this.allEmployees = data;
      this.employees = data;
    }));

    //no selected employee by default
    this.selectedId = -1;
  }

  /*showAll() removes search constraints and makes the 
  html table show every entry in the database */
  public showAll(){
    this.employees = this.allEmployees;
  }

  /*searchClick() constrains the list of displayed employees by 
  name, email, phone, country, state, and city*/ 
  public searchClick(){
    this.employees = [];
    
    alert("searchClick()");

    //for each entry in 'allemployees'...
    for(let i=0; i<this.allEmployees.length; i++){
      //check name
      if(this.searchName.length > 0){
        if(!this.allEmployees[i].Name.includes(this.searchName))
          continue;
      }
      //check email
      if(this.searchEmail.length > 0){
        if(!this.allEmployees[i].Email.includes(this.searchEmail))
        continue;
      }
      //check phone
      if(this.searchPhone.length > 0){
        if(!this.allEmployees[i].Phone.includes(this.searchPhone))
        continue;
      }
      //check country
      if(this.searchCountry.length > 0){
        if(!this.allEmployees[i].Country.includes(this.searchCountry))
        continue;
      }
      //check state
      if(this.searchState.length > 0){
        if(!this.allEmployees[i].State.includes(this.searchState))
        continue;
      }
      //check city
      if(this.searchCity.length > 0){
        if(!this.allEmployees[i].City.includes(this.searchCity))
        continue;
      }

      this.employees.push(this.allEmployees[i]);
    }//end of for loop
  }

  public deleteEmployee(id: number){
    //alert("deleting employee #" + id);

    //remove from employees
    for(let i=0; i<this.employees.length; i++){
      if(this.employees[i].ID == id){
        this.employees.splice(i,1);
      }
    }

    //remove from allEmployees
    for(let i=0; i<this.allEmployees.length; i++){
      if(this.allEmployees[i].ID == id){
        this.allEmployees.splice(i,1);
      }
    }

    this.appSvc.delete(id.toString());
  }
}
