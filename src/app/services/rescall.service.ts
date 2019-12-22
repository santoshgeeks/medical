import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// const APIEndPoint = 'https://dev-spay.smartdocsnow.com/payables-server/api/';
const APIEndPoint='https://api.lensorders.com/dot/'
 
@Injectable({
    providedIn: 'root'
})
 
export class RestcallsService {
    constructor(private http: HttpClient) { }
    call_GET(url) {
        return this.http.get(APIEndPoint + url);
    }
    call_POST(url, data) {
        return this.http.post(APIEndPoint + url, data);
    }
    call_PUT(url, data) {
        return this.http.put(APIEndPoint + url, data);
    }
    call_DELETE(url) {
        return this.http.delete(APIEndPoint + url);
    }
}