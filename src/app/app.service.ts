import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GrabService } from './grab.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router, private grabService: GrabService) { }


  loginUserApi(loginCredentials: {userName: string, password: any}) {

    this.http.post('http://localhost:3010/api/login', loginCredentials).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log(resp.data.token);
        localStorage.setItem('token_id', resp.data.token);

        this.grabService.updateLoggedInUserInfoInBs(resp.data.user, true);
        this.router.navigate(['home']);
      },
      (err) => {}
    );
  }
}
