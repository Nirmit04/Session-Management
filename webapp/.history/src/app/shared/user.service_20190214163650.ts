import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://dfaa1473.ngrok.io';

  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Mobile: user.Mobile,
      Dob: user.dob
    };
    return this.http.post(this.rootUrl + '//api/User/Register', body);
  }

}

