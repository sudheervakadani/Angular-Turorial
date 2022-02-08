import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GrabService } from './grab.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userLoggedinStatus: boolean = false;
  loggedInUserInfo: any;

  constructor(private grabService: GrabService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.grabService.userLoggedInStatusSubject.subscribe((status) => {
        this.userLoggedinStatus = status;
      })

      this.grabService.loggedInUserInfoSubject.subscribe((userInfo) => {
        this.loggedInUserInfo = userInfo;
      })
      if(this.userLoggedinStatus && this.loggedInUserInfo.role === 'Admin') {
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
    //return this.userLoggedinStatus && this.loggedInUserInfo.role === 'Admin' ? true : this.router.parseUrl('/login');
  }

}
