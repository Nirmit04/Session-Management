import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private serv: UserService) { }

  ngOnInit() {
    this.serv.getDetails().subscribe((data: any) => {

    });
    if (localStorage.getItem('userToken') == null) {
      this.router.navigate(['/login']);
    }
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
