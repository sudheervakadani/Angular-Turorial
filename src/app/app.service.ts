import { HttpClient } from '@angular/common/http';
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

        this.grabService.updateLoggedInUserInfoInBs(resp.data.user, true);
        this.router.navigate(['home']);
      },
      (err) => {}
    );
  }
}
