import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Common} from '../Common';
import {BaseResult, DriverAddRequest,driverdetail,DriverAddResponse,DriverAddExpRequest,DriverList,BaseResponse, DriverAddBankRequest, DriverImageuploadresponse, DeleteDriverRequest, DriverDocsRequest, Base} from '../driver/DriverContract';
import { HttpClient, HttpHeaders,HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class Driverservice{

    constructor(private http: Http, private httpClient:HttpClient) {
    }
    AddDriverInfo(Request: DriverAddRequest): Observable<DriverAddResponse> {
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "addDriverInfo", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
        
    }
    AddDriverExperience(Request: DriverAddExpRequest): Observable<string> {
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "adddriverexperience", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }

    AddDriverBankDetails(Request: DriverAddBankRequest): Observable<string> {
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "addDriverBankDtl", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    DeleteDriver(Request:DeleteDriverRequest):Observable<string>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "deleteDriverInfo", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    // postFile(fileToUpload: File): Observable<string> {
    //     debugger;
    //     let headers = new HttpHeaders({
    //         'Content-Type': 'application/jpg',
    //         'Accept': 'application/json'
    //     });
    //     // const formData: FormData = new FormData();
    //     // formData.append('photograph', fileToUpload, fileToUpload.name);
    //     // formData.append('driver_id','driver_id','4')
    //     return this.http
    //     .post(Common.baseApi +"updateDriverimage", fileToUpload)
    //     .map(r => r.json())
    //     .catch(this.handlError);
    // }
    uploadFile(file: File, DriverId): Observable<Response> {
debugger;
        let formData = new FormData();
        formData.append('photograph', file);
        formData.append('driver_id',DriverId);
        let params = new HttpParams();
    
        const options = {
          params: params,
          reportProgress: true,
        };
    
        // const req = new HttpRequest('POST', Common.baseApi +"updateDriverimage", formData, options);
        // debugger;
        // return this.httpClient.request(req);
        return this.http.post(Common.baseApi +"updateDriverimage", formData,options);
        //  this.http.post(Common.baseApi +"updateDriverimage", formData,options).map(res=>{
        //     return r=>r.json();
        // });
      }
    //   UploadDriverDocs(file: File, DriverId, name): Observable<Response> {
    //     debugger;
    //     let formData = new FormData();
    //     formData.append('drivers_license_img', file);
    //     formData.append('driver_id',DriverId);
    //     let params = new HttpParams();
            
    //             const options = {
    //               params: params,
    //               reportProgress: true,
    //             };
    //             return this.http.post(Common.baseApi +"updateDriverDocimage", file,options);

    //     }

        UploadDriverDocs(file: File, DriverId,name): Observable<Response> {
            debugger;
            let formData = new FormData();
                formData.append(name, file);
                formData.append('driver_id',DriverId);
                    let params = new HttpParams();
                
                    const options = {
                      params: params,
                      reportProgress: true,
                    };
                    return this.http.post(Common.baseApi +"updateDriverDocimage", formData,options);
                  }

              AddDriverDocDetails(Request: DriverDocsRequest): Observable<Base> {
                debugger;
                let headers = new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
        
                let body = JSON.stringify(Request);
        
                return this.http
                    .post(Common.baseApi + "addDriverDoc", body, { headers: headers })
                    .map(r => r.json())
                    .catch(this.handlError);
            }
    GetDriverList ():Observable<BaseResponse<DriverList>>{
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.get(Common.baseApi + "showDriverinfo", { headers: headers }).map(res => {
            return res.json();
        });
    }

    GetDriverDetailsById ():Observable<driverdetail>{
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.get(Common.baseApi + "showDriverbyidinfo", { headers: headers }).map(res => {
            return res.json();
        });
    }
    handlError(error: any) {
        let body = JSON.parse(error._body);
        return Observable.throw(body);
    }
}


