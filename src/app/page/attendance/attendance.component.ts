import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAttendance, attendance } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  attendanceArray: IAttendance[] = [];
  attendanceObj: attendance = new attendance();
  employeeArray: any[] = [];
  ngOnInit(): void {
    this.getEmployee();
    this.loadAttendance()
  }
  constructor(private service: EmployeeService, private http: HttpClient) {}
  onEdit(id: any) {}
  onDelete(id: any) {}
  getEmployee() {
    this.service.getAllEmployee().subscribe((res: any) => {
      this.employeeArray = res.data;
    });
  }
  onSave() {}
  onUpdate() {}

  loadAttendance() {
    this.http
      .get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance')
      .subscribe((res: any) => {
        this.attendanceArray = res.data;
        console.log(res.data, 'attend');
      });
  }
}
