import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private serv: UserService,
    private router: Router) { }
  isloginError = false;
  bb = '';
  cont = 1;
  visible = 'password';
  toggle1() {
    if (this.bb.length > 0) {
      this.cont++;
      if (this.cont % 2 === 0) {
        this.visible = 'text';
      } else {
        this.visible = 'password';
      }
    }
  }
  ngOnInit() {
  }
  Onsubmit(form: NgForm) {
    this.serv.authenticate(form.value).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('time', data.expires_in);
      console.log(data);
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isloginError = true;
      });
  }
}
