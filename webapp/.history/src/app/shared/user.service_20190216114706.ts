import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://1ead0573.ngrok.io';




  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Mobile: user.PhoneNumber,
      Post: user.post,
      Dob: user.dob
    };
    // console.log(body);
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  authenticate(data) {
    const body = 'username=' + data.UserName + '&Password=' + data.Password + '&grant_type=password';
    const reqHearder = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
    return this.http.post(this.rootUrl + '/token', body, { headers: reqHearder });

  }
  getDetails() {
    const pp = localStorage.getItem('userToken');
    // console.log(pp);
    const reqhh = new HttpHeaders({ 'Authorization': 'Bearer ' + pp });
    // console.log(reqhh);
    return this.http.get(this.rootUrl + '/api/GetUserClaims', { headers: reqhh });
  }
}

