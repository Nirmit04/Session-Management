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




  constructor(private router: Router,
    private serv: UserService) { }

  ngOnInit() {
    this.serv.userClaims.UserName = '';
    this.serv.userClaims.Email = '';
    this.serv.userClaims.FirstName = '';
    this.serv.userClaims.LastName = '';
    this.serv.userClaims.LoggedOn = '';
    if (localStorage.getItem('userToken') == null) {
      this.router.navigate(['/login']);
    } else {

      this.serv.getDetails().subscribe((data: any) => {
        this.serv.userClaims = data;
        console.log(this.serv.userClaims);
      });
    }

  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
