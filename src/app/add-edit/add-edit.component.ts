import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { RelevantEmployeeService } from '../relevant-employee.service';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  public relevantID: number = -1;
  public relevantEmployee: Employee = null;

  public adding = false;

  public inputPhoto = "";
  public inputName = "";
  public inputEmail = "";
  public inputPhone = "";
  public inputCountry = "";
  public inputState = "";
  public inputCity = "";

  public employees: Employee[] = [];

  constructor(private appSvc: AppServiceService, 
    private relEmpSvc: RelevantEmployeeService, 
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.relevantID = this.relEmpSvc.getRelevantEmployee();

    this.appSvc.getPeople().then((data =>{
      this.employees = data;
    }));
    
    if(this.relevantID < 0){
      this.adding = true;
    }
    else{
      this.adding = false;
      this.findRelevantEmployee();
    }
  }

  private findRelevantEmployee(){
    //search for relevantID in the list of employees...
    for(let i=0; i<this.employees.length; i++){
      if(this.employees[i].ID == this.relevantID){
        this.relevantEmployee = this.employees[i];
      }
    }
  }

  public addClick(){

  }

  public editClick(){

  }
}
