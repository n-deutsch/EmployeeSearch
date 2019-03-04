import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute} from '@angular/router';
import {Employee} from '../employee';
import { RelevantEmployeeService } from '../relevant-employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  public relevantEmployee: Employee = null;

  public inputPhoto = "";
  public inputName = "";
  public inputEmail = "";
  public inputPhone = "";
  public inputCountry = "";
  public inputState = "";
  public inputCity = "";

  constructor(private appSvc: AppServiceService, private relEmpSvc: RelevantEmployeeService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.relevantEmployee = this.relEmpSvc.getRelevantEmployee();
  }

  addClick(){

  }

  editClick(){

  }
}
