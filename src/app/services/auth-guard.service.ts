import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public router: Router) { }
  canActivate(){
      // Check whether the loggedInUserName & accessToken are existing or not.
      if (!sessionStorage.getItem('loggedInUserName') || !sessionStorage.getItem('accessToken')) {
          // Details are missing. Need navigation to be redirected to Login.
          //debugger;
          this.router.navigate(['/login']);
          return false;
      }
      // Details are there. We can allow the navigation to be loaded.
      return true;        
  }
}
