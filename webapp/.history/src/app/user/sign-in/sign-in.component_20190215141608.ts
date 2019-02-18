import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private serv: UserService) { }
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

  }
}
