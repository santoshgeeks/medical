import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { RestcallsService } from '../services/rescall.service';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    tokenObject: any;
    userDetails : any;
    brandAndLogoImage:any;
    constructor(private restCallsService: RestcallsService) { }
    authenticate(loginObject) {
        return this.restCallsService.call_POST('login', loginObject).pipe(map(result => {
            // Login successful if there is a JWT token in the response.
            this.tokenObject = result;
            if (this.tokenObject && this.tokenObject.id_token) {
                // Store JWT token in session storage to keep user logged in between page refreshes.
                sessionStorage.setItem('accessToken', JSON.stringify(this.tokenObject));
                return { success: true, message: 'successful login' };
            }
        }))
    }
 
    getAccountDetails() {
        return this.restCallsService.call_GET('account').pipe(map(result => {
            this.userDetails = result;
            let loggedInUser = this.userDetails.firstName + ' ' + this.userDetails.lastName;
            // Store User details in session storage to keep user logged in between page refreshes.
            this.storeDetailsInSessionStorage(loggedInUser);
            console.log(this.userDetails);
            return this.userDetails;            
        }))
    }
    storeDetailsInSessionStorage(userDetails){      
        sessionStorage.setItem('loggedInUserName', userDetails);
        sessionStorage.setItem('loggedInUserDeails', JSON.stringify(userDetails));      
    }
    logout() {
        // Remove user details from session storage on logout.
        console.log(this.tokenObject)
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('loggedInUserName');
        sessionStorage.removeItem('loggedInUserDeails');
        console.log( this.tokenObject)
    }
}