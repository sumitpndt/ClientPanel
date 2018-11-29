import { Component, OnInit, AfterViewInit,ViewContainerRef } from '@angular/core';
import { AuthService } from '../../Authservice';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginRequest } from '../../Common';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    loginform: FormGroup;
    submitted = false;
    err_message : string;
    constructor(private _router : Router,public toastr: ToastsManager, vcr: ViewContainerRef, private _app : AppComponent, private formBuilder: FormBuilder, private auth:AuthService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.loginform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            checkbox:['']
        });
        
    }

    ngAfterViewInit() {
        /*$(function() {
            (".preloader").fadeOut();
        });
        
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });*/
    }

    get loginUserData() { return this.loginform.controls; }

    onLoggedin() {
        debugger;
        this.submitted = true;
        if (this.loginform.invalid) {
            return;
        }
        let Request = new LoginRequest();
        Request.email = this.loginform.value['email'];
        Request.password = this.loginform.value['password'];
            this._app.loading = true;
            this.auth.Login(Request).subscribe(
            res => {
                this.toastr.success(res.StatusMessage,'Success !')
               // this.toastr.success('You are awesome!', 'Success!');
                debugger;
                localStorage.setItem("userid",res.data.id);
                localStorage.setItem("name", res.data.company_Name);
                localStorage.setItem("token",res.data.token);
                this._router.navigate(["/dashboard/dashboard1"]);
            },
            err => {
                debugger;
                this.toastr.error('Internal server Error','Error !');
                this._app.loading = false;
                console.log(err);
            });
            
    }

}
