import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  useObj: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    debugger;
    if (this.useObj.username == 'admin' && this.useObj.password == '112233') {
      alert('true');
      this.router.navigateByUrl('dashboard');
    } else {
      alert('wrong');
    }
  }
}
