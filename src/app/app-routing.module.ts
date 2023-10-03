import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { AttendanceComponent } from './page/attendance/attendance.component';
import { AdvanceComponent } from './page/advance/advance.component';
import { LeaveComponent } from './page/leave/leave.component';
import { SalaryComponent } from './page/salary/salary.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'attandance', component: AttendanceComponent },
      { path: 'advance', component: AdvanceComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'salary', component: SalaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
