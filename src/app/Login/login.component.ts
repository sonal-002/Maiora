import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveComponent } from '../Leave/apply-leave.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: any;
  password!: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {}

  onSubmit() {
    this.http
      .post('https://api.escuelajs.co/api/v1/auth/login', {
        email: this.userName,
        password: this.password,
      })
      .subscribe((response: any) => {
        sessionStorage.setItem('auth-token', response.access_token);
        this.openDialog();
      });
  }

  openDialog() {
    this.dialog
      .open(ApplyLeaveComponent, { height: '80%', width: '60%' })
      .afterClosed();
  }
}
