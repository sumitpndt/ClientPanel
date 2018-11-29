import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response} from '@angular/http';

export class Common
{
   // static baseApi = "http://www.webdevelopmenttesting.com/dispatch/restful/public/api/";

    //API-Dev
    static baseApi ="http://webdevelopmenttesting.com/dispatch/apidev/public/api/";

    //API-Test
    //static baseApi ="http://webdevelopmenttesting.com/dispatch/apitest/public/api/";
    
    //API-Prod
    //static baseApi ="http://webdevelopmenttesting.com/dispatch/apiprod/public/api/";

    static emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    static baseImageUrl ="http://webdevelopmenttesting.com/dispatch/apidev";
}

export class LoginRequest{
"email":string;
"password":string;
}

export class BaseResponse<T>
{
   public StatusCode: number;
   public StatusMessage: string;
   public data:T;
}
export class LoginResult{
    public token:string;
    public id:string;
    public company_Name:string;
}
export class forgotpasswordRequest{
    public email:string;
}
export class ForgotResult{
    "message": string;
    "status_code": number;
}