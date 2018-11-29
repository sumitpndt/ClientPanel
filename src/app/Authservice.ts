import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import {Common,LoginRequest,forgotpasswordRequest,ForgotResult,BaseResponse,LoginResult} from '../app/Common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http:Http){}
public isAuthenticated(): boolean {
    var item = localStorage.getItem("token");
    var id = localStorage.getItem("userid");
    if (item != 'undefined' && item != null && id !=null) {
        return true;
    } else {
        return false;
    }
}
Login(Request:LoginRequest):Observable<BaseResponse<LoginResult>>{
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        let body = JSON.stringify(Request);
        return this.http.post(Common.baseApi + "clientlogin",body, { headers: headers }).map(res => {
            return res.json();
        });
    
}

forgotUser(Request:forgotpasswordRequest):Observable<ForgotResult>{
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    let body = JSON.stringify(Request);
    return this.http.post(Common.baseApi + "clientforgetpassword",body, { headers: headers }).map(res => {
        return res.json();
    });
}
}