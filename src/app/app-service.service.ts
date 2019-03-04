import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';

//this allows us to avoid cross origin policy somehow??
const httpOptions = {
  headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  })
};

@Injectable(
  //providedIn: 'root'
)



export class AppServiceService {
  private url: string = "https://employeemanagerbackend.azurewebsites.net/api";

  

  constructor(private http: HttpClient) { }

  public getPeople():Promise<any>{
    return this.http.get(`${this.url}/People`).toPromise();
  }

  public getPerson(id: string):Promise<any>{
    return this.http.get(`${this.url}/Person/${id}`).toPromise();
  }

  public update(employee: Employee):Promise<any>{
    return this.http.post(`${this.url}/Update`, employee).toPromise();
  }

  public add(employee: Employee):Promise<any>{
    return this.http.post(`${this.url}/Add`, employee).toPromise();
  }

  public delete(id: string){
    return this.http.delete(`${this.url}/Delete/${id}`).toPromise();
  }

  public getCountries():Promise<any>{
    return this.http.get(`${this.url}/Countries`).toPromise();
  }

  public getStates(countryId: string):Promise<any>{
    return this.http.get(`${this.url}/States/${countryId}`).toPromise();
  }

  public getCities(stateId: string):Promise<any>{
    return this.http.get(`${this.url}/Cities/${stateId}`).toPromise();
  }
}
