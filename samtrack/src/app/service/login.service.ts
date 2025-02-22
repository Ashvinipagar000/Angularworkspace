import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginrequest:any) : Observable <any>{
    const url='http://localhost:8080/user/login-user';
    this.http.post(url, loginrequest);
    return this.http.post(url, loginrequest);
  }



}
