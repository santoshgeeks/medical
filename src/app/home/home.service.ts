import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { RestcallsService } from '../services/rescall.service';
@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private restCallsService: RestcallsService){}

    getlists() {
        return this.restCallsService.call_GET('list').pipe(map(result => {
            return result;            
        }))
    }
    tokenObject: any;
}