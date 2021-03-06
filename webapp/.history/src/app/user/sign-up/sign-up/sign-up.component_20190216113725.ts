import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  visible = 'password';
  cont = 1;
  photo = 'a';
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  toggle1() {
    if (this.user.Password.length > 0) {
      this.cont++;
      if (this.cont % 2 === 0) {
        this.visible = 'text';
      } else {
        this.visible = 'password';
      }
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      dob: null,
      post: ''
    };
  }
  onFileSelected() {

  }

  OnSubmit(form: NgForm) {
    console.log(form.value);
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded === true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        } else {
          this.toastr.error(data.Errors[0]);
        }
      });
  }

}
