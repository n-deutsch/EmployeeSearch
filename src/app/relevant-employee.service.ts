import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class RelevantEmployeeService {

  relevantId: number = -1;
  constructor() { }

  public getRelevantEmployee(){
    return this.relevantId;
  }

  public setRelevantEmployee(id: number){
    this.relevantId = id;
  }
}
