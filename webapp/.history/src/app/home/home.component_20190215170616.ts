import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;



  constructor(private router: Router,
    private serv: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('userToken') == null) {
      this.router.navigate(['/login']);
      this.userClaims.UserName = 'a';
      this.userClaims.Email = 'a';
      this.userClaims.FirstName = 'a';
      this.userClaims.LastName = 'a';
      this.userClaims.LoggedOn = 'a';
    } else {
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
