import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class RelevantEmployeeService {

  relevantEmployee: Employee = null;
  constructor() { }

  public getRelevantEmployee(){
    return this.relevantEmployee;
  }

  public setRelevantEmployee(e: Employee){
    this.relevantEmployee = e;
  }
}
