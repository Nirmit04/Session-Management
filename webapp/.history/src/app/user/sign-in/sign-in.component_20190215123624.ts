import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
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

}
