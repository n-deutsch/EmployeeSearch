import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent }      from './employees/employees.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, //empty/default view

  { path: 'search', component: SearchComponent },
  { path: 'add-edit', component: AddEditComponent },
  /*ANTIQUATED TUTORIAL PATHS
  { path: 'employees', component: EmployeesComponent },
  { path: 'dashboard', component: DashboardComponent }
  */
];

@NgModule({
exports: [RouterModule],
imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
