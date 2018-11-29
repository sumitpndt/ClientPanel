import { Component, OnInit, AfterViewInit,EventEmitter, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {DriverAddRequest,DriverAddExpRequest,DriverDocsRequest, DriverAddBankRequest} from '../DriverContract';
import {Driverservice} from '../Driverservice';
import { debug } from 'util';
 import { ViewChild, ElementRef} from '@angular/core';
 import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { Common } from '../../Common';


@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  DriverProfileform: FormGroup;
  DriverExpform:FormGroup;
  DriverBankform:FormGroup;
  DocumentForm:FormGroup;
  submitted = false;
    err_message : string;
    @ViewChild('content2') content2: ElementRef;
  constructor(private _router : Router,public toastr: ToastsManager, vcr: ViewContainerRef,private _app : AppComponent, private formBuilder: FormBuilder,private DriverService: Driverservice) {
    this.toastr.setRootViewContainerRef(vcr);
    this.EditDriver();
   }
//  ShowSuccess(){
//    debugger;
//    this.toast.success('hi');
//  }
  
  ngOnInit() {
    this.DriverProfileform = this.formBuilder.group({
      DriverName: ['', [Validators.required]],
      Callsign:['',[Validators.required]],
      Vechile1:['',[Validators.required]],
      Forename:[''],
      salutation:[''],
      surname:[''],
      address:[''],
      address1:[''],
      address2:[''],
      Town:[''],
      County:[''],
      PostCode:[''],
      Country:[''],
      Telephone:[''],
      Mobile:[''],
      Emergency:[''],
      Email:['',[Validators.pattern(Common.emailPattern)]],
      Description:[''],
      Registration:['', Validators.required],
      booking_class:[''],
      DOb:['', Validators.required],
      NInumber:['', Validators.required],
      Start:[''],
      Finish:[''],
      Company:[''],
      Shift:['', Validators.required],
      License:['', Validators.required],
      Advanced:[''],
      Points:[''],
      Details:[''],
      Licensing:[''],
      Badge:[''],
      LicenseNumber:[''],
      OperatorLicence:[''],
      Pending:[''],
      Driverlist:[''],
      costumer_account:[''],
      passenger_phone:[''],
      passenger_mobile:[''],
      passenger_email:[''],
      bookings_sent:['']
  })

  this.DriverExpform = this.formBuilder.group({
    Experience:['']
  });

  this.DocumentForm = this.formBuilder.group({
    Driverlicensedue:[''],
    RoadTax:[''],
    InsuranceDue:[''],
    MOTDue:[''],
    LicenseDue:[''],
    PCOCartestDue:['']
  });

  this.DriverBankform = this.formBuilder.group({
    BankName:[''],
    address1:[''],
    address2:[''],
    address3:[''],
    Town:[''],
    County:[''],
    PostCode:[''],
    Country:[''],
    SortCode:[''],
    AccountNo:[''],
    AccountName:['']
  });
  }
  // This is for the collapse example
  public isCollapsed = true;
  public formData: FormData = new FormData();
  public driverImageUrl:string;
  
  fileToUpload: File = null;
  public files:FileList;
  fileChange(event) {
    debugger;
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let DriverId = Number(localStorage.getItem('DriverId'));
        this.DriverService.uploadFile(file,DriverId).subscribe(Response  => {
              //this.driverImageUrl = data.ur;
              this.toastr.success('Image Uploaded Successfully', 'Success!');
              debugger;
              // do something, if upload success
              }, error => {
               // console.log(error);
              });
    }
}
EditDriver(){
  debugger;
  if(localStorage.getItem("DriverData") != null)
  {
    let data = JSON.parse(localStorage.getItem("DriverData"));
  //   this.DriverProfileform.setValue({
  //     DriverName:"Test"
  //     // Callsign:['',[Validators.required]],
  //     // Vechile1:['',[Validators.required]],
  //     // Forename:[''],
  //     // salutation:[''],
  //     // surname:[''],
  //     // address:[''],
  //     // address1:[''],
  //     // address2:[''],
  //     // Town:[''],
  //     // County:[''],
  //     // PostCode:[''],
  //     // Country:[''],
  //     // Telephone:[''],
  //     // Mobile:[''],
  //     // Emergency:[''],
  //     // Email:[''],
  //     // Description:[''],
  //     // Registration:['', Validators.required],
  //     // booking_class:[''],
  //     // DOb:['', Validators.required],
  //     // NInumber:['', Validators.required],
  //     // Start:[''],
  //     // Finish:[''],
  //     // Company:[''],
  //     // Shift:['', Validators.required],
  //     // License:['', Validators.required],
  //     // Advanced:[''],
  //     // Points:[''],
  //     // Details:[''],
  //     // Licensing:[''],
  //     // Badge:[''],
  //     // LicenseNumber:[''],
  //     // OperatorLicence:[''],
  //     // Pending:[''],
  //     // Driverlist:[''],
  //     // costumer_account:[''],
  //     // passenger_phone:[''],
  //     // passenger_mobile:[''],
  //     // passenger_email:[''],
  //     // bookings_sent:['']
  // }); 
  }
}
// UploadDcouments(){
//   let DriverId = Number(localStorage.getItem('DriverId'));
//   this.DriverService.UploadDriverDocs(this.formData,DriverId).subscribe(Response  => {
//     //this.driverImageUrl = data.ur;
//     debugger;
//     // do something, if upload success
//     }, error => {
//      // console.log(error);
//     });
// }
AddDriverDocument(){
  debugger;
  this.submitted = true;
  if (this.DocumentForm.invalid) {
      return;
  }
  this._app.loading = true;
  let Request = new DriverDocsRequest();
  Request.driverlicensedue = this.DriverExpform.value['Driverlicensedue'];
  Request.insurancedue = this.DriverExpform.value['InsuranceDue'];
  Request.licensedue = this.DriverExpform.value['LicenseDue'];
  Request.motDue = this.DriverExpform.value['MOTDue'];
  Request.pcoCartestdue = this.DriverExpform.value['PCOCartestDue'];
  Request.roadtacdue = this.DriverExpform.value['RoadTax'];
  Request.driver_id = Number(localStorage.getItem('DriverId'));

  this.DriverService.AddDriverDocDetails(Request).subscribe(res=>{
      debugger;   
      this.toastr.success('Driver Document Details Added Successfully', 'Success!');   
        //  this._router.navigate(["/driver"]);
    },
  err=>{
  err=>console.log(err);
  });
}
Clear(){
  this._router.navigate(['/driver']);
}
Documentchange(event) {
  debugger;
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let name = event.target.id;
        let DriverId = Number(localStorage.getItem('DriverId'));
        this.DriverService.UploadDriverDocs(file,DriverId,name).subscribe(Response  => {
              //this.driverImageUrl = data.ur;
              this.toastr.success('Document Uploaded Successfully', 'Success!');
              debugger;
              // do something, if upload success
              }, error => {
               // console.log(error);
              });
    }
}

get DriverProfileformData() { return this.DriverProfileform.controls; }
  AddDriverDetails()
  {
    debugger;
    this.submitted = true;
    if (this.DriverProfileform.invalid) {
        return;
    }

    this._app.loading = true;
    let Request= new DriverAddRequest();
    Request.address1= this.DriverProfileform.value['address1'];
    Request.address2 = this.DriverProfileform.value['address2'];
    Request.address3 = this.DriverProfileform.value['address3'];
    Request.adv_driving_coursce = this.DriverProfileform.value['Advanced'];
    Request.badge_no = this.DriverProfileform.value['Badge'];
    Request.booking_class = this.DriverProfileform.value['booking_class'];
    Request.call_sign = this.DriverProfileform.value['Callsign'];
    Request.company = this.DriverProfileform.value['Company'];
    Request.contry = this.DriverProfileform.value['County'];
    Request.country = this.DriverProfileform.value['Country'];
    Request.description = this.DriverProfileform.value['Description'] ;
    Request.DOB = this.DriverProfileform.value['DOb'].year+"-"+this.DriverProfileform.value['DOb'].month+"-"+this.DriverProfileform.value['DOb'].day;
    Request.driving_license_number = this.DriverProfileform.value['License'];
    Request.email = this.DriverProfileform.value['Email'];
    Request.emergency = this.DriverProfileform.value['Emergency'];
    Request.finish_date = this.DriverProfileform.value['Finish'].year+"-"+this.DriverProfileform.value['Finish'].month+"-"+this.DriverProfileform.value['Finish'].day;
    Request.forename = this.DriverProfileform.value['Forename'];
    Request.hideCstAccNo = this.DriverProfileform.value['costumer_account']=="true"?1:0;
    Request.hidePaNo = this.DriverProfileform.value['bookings_sent']==true?1:0;
    Request.hidePassEmail = this.DriverProfileform.value['passenger_email']==true?1:0;
    Request.hidePassMobno = this.DriverProfileform.value['passenger_mobile']==true?1:0;
    Request.hidePassPhno = this.DriverProfileform.value['passenger_phone']==true?1:0;
    Request.inPcoDriverList = this.DriverProfileform.value['Driverlist']==true?1:0;
    Request.license_no = this.DriverProfileform.value['LicenseNumber'];
    Request.licensingAuthority = this.DriverProfileform.value['Licensing'];
    Request.mobile = this.DriverProfileform.value['Mobile'];
    Request.name = this.DriverProfileform.value['DriverName'];
    Request.NI_no = this.DriverProfileform.value['NInumber'];
    Request.operator_license_no = this.DriverProfileform.value['OperatorLicence'];
    Request.point = this.DriverProfileform.value['Points'];
    Request.point_dtails = this.DriverProfileform.value['Details'];
    Request.postcode = this.DriverProfileform.value['PostCode'];
    Request.registration_no = this.DriverProfileform.value['Registration'];
    Request.salutation = this.DriverProfileform.value['salutation'];
    Request.shift = this.DriverProfileform.value['Shift'];
    Request.start_date = this.DriverProfileform.value['Start'].year+"-"+this.DriverProfileform.value['Start'].month+"-"+this.DriverProfileform.value['Start'].day;
    Request.surname = this.DriverProfileform.value['surname'];
    Request.telephone = this.DriverProfileform.value['Telephone'];
    Request.town = this.DriverProfileform.value['Town'];
    Request.vat_reg = this.DriverProfileform.value['Pending'];
    Request.vat_reg_no = this.DriverProfileform.value['NInumber'];
    Request.vechile = "Test";

    this.DriverService.AddDriverInfo(Request).subscribe(res=>{
      debugger;
      this.toastr.success('Driver Details Added Successfully', 'Success!');
          localStorage.setItem("DriverId",res.driverdetail.id.toString());
         // this._router.navigate(["/driver"]);
    },
  err=>{
    debugger;
 this.toastr.error(err.message,'Error !');
  });
  }
  
 AddDriverExp(){
   debugger;
  this.submitted = true;
  if (this.DriverExpform.invalid) {
      return;
  }
  this._app.loading = true;
  let Request = new DriverAddExpRequest();
  Request.experience = this.DriverExpform.value['Experience'];
  Request.driver_id = Number(localStorage.getItem('DriverId'));

  this.DriverService.AddDriverExperience(Request).subscribe(res=>{
      debugger;      
      this.toastr.success('Driver Experience Added Successfully', 'Success!');
         // this._router.navigate(["/driver"]);
         this.DriverExpform.reset();
    },
  err=>{
  err=>console.log(err);
  });
  
 }

 AddDriverBankDetail(){
  debugger;
 this.submitted = true;
 if (this.DriverBankform.invalid) {
     return;
 }
 this._app.loading = true;
 let Request = new DriverAddBankRequest();
 Request.accName = this.DriverExpform.value['AccountName'];
 Request.accountNumber = this.DriverExpform.value['AccountName'];
 Request.address1 = this.DriverExpform.value['AccountName'];
 Request.address2 = this.DriverExpform.value['AccountName'];
 Request.address3 = this.DriverExpform.value['AccountName'];
 Request.bank_name = this.DriverExpform.value['AccountName'];
 Request.country = this.DriverExpform.value['AccountName'];
 Request.county = this.DriverExpform.value['AccountName'];
 Request.postCode = this.DriverExpform.value['AccountName'];
 Request.sortCode = this.DriverExpform.value['AccountName'];
 Request.town = this.DriverExpform.value['AccountName'];
 Request.driver_id = Number(localStorage.getItem('DriverId'));

 this.DriverService.AddDriverBankDetails(Request).subscribe(res=>{
     debugger;     
     this.toastr.success('Driver Bank Details Added Successfully', 'Success!'); 
     this.DriverBankform.reset();
        // this._router.navigate(["/driver"]);
   },
 err=>{

 err=>console.log(err);
 });
 
}
}
