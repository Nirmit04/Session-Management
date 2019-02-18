import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: User;



  constructor(private router: Router,
    private serv: UserService) { }
  aab() {
    this.userClaims.UserName = 'a';
    this.userClaims.Email = 'a';
    this.userClaims.FirstName = 'a';
    this.userClaims.LastName = 'a';
    this.userClaims.LoggedOn = 'a';
  }
  ngOnInit() {
    if (localStorage.getItem('userToken') == null) {
      this.router.navigate(['/login']);
    } else {
      // this.aab();
      this.serv.getDetails().subscribe((data: any) => {
        this.userClaims = data;
        console.log(this.userClaims);
      });
    }

  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
