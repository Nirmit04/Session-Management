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
  readonly rootUrl = 'http://ea9919d1.ngrok.io';

  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      PhoneNumber: user.Mobile,
      // Post: user.post
      // DateOfBirth: user.dob
    };
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  authenticate(data) {
    const body = 'username=' + data.UserName + '&Password=' + data.Password + '&grant_type=password';
    const reqHearder = new HttpHeaders();
    // return this.http.post(this.rootUrl + '/token', body, { Headers: reqHearder });
    console.log(reqHearder);
  }
}

z