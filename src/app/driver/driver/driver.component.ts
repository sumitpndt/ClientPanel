import { Component, OnInit, AfterViewInit,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {DriverAddRequest,DriverAddExpRequest, DriverAddBankRequest,DriverList,DriverShowResponse, DeleteDriverRequest} from '../DriverContract';
import {Driverservice} from '../Driverservice';
import { debug } from 'util';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
 
  constructor(private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder,private DriverService: Driverservice) {
this.GetDriverList();
  }
  driverList :Array<DriverShowResponse>=[];
  GetDriverList(){
    debugger;
    this.driverList =[];
this.DriverService.GetDriverList().subscribe(res=>{
    debugger;
    res.data.driverList.forEach(item => {
        this.driverList.unshift(item);
        debugger;
      });
},        
err => {
});
}
DeleteCompanyById(id){
  let Request = new DeleteDriverRequest();
  Request.id = id;
  this.DriverService.DeleteDriver(Request)
  .subscribe(res => {
      this._router.navigate(["/driver"]);
      this.GetDriverList();
  },
  err => {
      err => console.log(err)
  },
  );
}

EditDriver(driver){
  debugger;
  localStorage.setItem("DriverData",JSON.stringify(driver));
  this._router.navigate(['/driver/add']);
}
}
