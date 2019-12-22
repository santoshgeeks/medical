import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
      // Get the role expected by this route.     
      const expectedRole = route.data.expectedRole;
      // Get the JWT token of the loggedIn user currently & decode it to get it's payload. Next, check whether the expected role exists or not in the token payload.
      const token = sessionStorage.getItem('accessToken');        
      const tokenPayload = decode(token);     
      //debugger;
      if (tokenPayload.auth.indexOf(expectedRole) == -1) {
          // Expected role is not there. We do not allow the navigation to be loaded. Navigate to the Unauthorised component.
          this.router.navigate(['login']);
          return false;
      }
      // Expected role is there. Allow the navigation to be loaded.
      return true;
  }
}
