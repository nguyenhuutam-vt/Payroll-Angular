import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeList: any[] = [];
  employeeObj: any;

  constructor(private service: EmployeeService) {
    this.resetObj();
  }
  ngOnInit(): void {
    this.loadEmployee();
  }

  resetObj() {
    this.employeeObj = {
      empId: 0,
      empName: '',
      empContactNo: '',
      empAltContactNo: '',
      empEmail: '',
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      city: '',
      state: '',
      bankName: '',
      iFSC: '',
      accountNo: '',
      bankBranch: '',
      salary: 0,
    };
  }

  loadEmployee() {
    this.service.getAllEmployee().subscribe((res: any) => {
      this.employeeList = res.data;
      console.log(res.data, 'employ');
    });
  }

  onSave() {
    this.service.createEmployee(this.employeeObj).subscribe((res: any) => {
      console.log(res);

      if (res.result) {
        this.loadEmployee();
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(id: any) {
    this.service.getEmpById(id).subscribe((res: any) => {
      console.log(res.data, 'edit');
      this.employeeObj = res.data;
    });
  }
  onUpdate() {
    this.service.updateEmployee(this.employeeObj).subscribe((res: any) => {
      console.log(res);

      if (res.result) {
        this.loadEmployee();
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: any) {
    this.service.deletetEmpById(id).subscribe((res: any) => {
      if (res.result) {
        this.loadEmployee();
        alert(res.message);
      } else {
        alert('wrong');
      }
    });
  }
}
