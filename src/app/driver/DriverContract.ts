import { Time } from "@angular/common";

export class DriverAddRequest{
    "name":string;
    "call_sign":string;
    "salutation":string;
    "forename":string;
    "surname":string;
    "address1":string;
    "address2":string;
    "address3":string;
    "town":string;
    "postcode":string;
    "contry":string;
    "country":string;
    "telephone":string;
    "mobile":string;
    "emergency":string;
    "email":string;
    "vechile":string;
    "description":string;
    "registration_no":string;
    "booking_class":string;
    "DOB":string;
    "NI_no":string;
    "start_date":string;
    "finish_date":string;
    "company":string;
    "shift":string;
    "driving_license_number":string;
    "adv_driving_coursce":string;
    "point":string;
    "point_dtails":string;
    "licensingAuthority":string;
    "badge_no":string;
    "license_no":string;
    "operator_license_no":string;
    "vat_reg":number;
    "vat_reg_no":number;
    "inPcoDriverList":number;
    "hideCstAccNo":number;
    "hidePassPhno":number;
    "hidePassMobno":number;
    "hidePassEmail":number;
    "hidePaNo":number;
}
export class DriverShowResponse{
    "id":number;
    "name":string;
    "call_sign":string;
    "salutation":string;
    "forename":string;
    "surname":string;
    "address1":string;
    "address2":string;
    "address3":string;
    "town":string;
    "postcode":string;
    "contry":string;
    "country":string;
    "telephone":string;
    "mobile":string;
    "emergency":string;
    "email":string;
    "vechile":string;
    "description":string;
    "registration_no":string;
    "booking_class":string;
    "DOB":Date;
    "NI_no":string;
    "start_date":string;
    "finish_date":string;
    "company":string;
    "shift":string;
    "driving_license_number":string;
    "adv_driving_coursce":string;
    "point":string;
    "point_dtails":string;
    "licensingAuthority":string;
    "badge_no":string;
    "license_no":string;
    "operator_license_no":string;
    "vat_reg":number;
    "vat_reg_no":number;
    "inPcoDriverList":number;
    "hideCstAccNo":number;
    "hidePassPhno":number;
    "hidePassMobno":number;
    "hidePassEmail":number;
    "hidePaNo":number;
}
export class BaseResult<T>
{
    public status_code: string;
    public data: T;
}
export class BaseResponse<T>
{
   public StatusCode: number;
   public StatusMessage: string;
   public data:T;
}
export class Base{
   public StatusCode: number;
   public StatusMessage: string;
}
export class DriverAddResponse{
    "driverdetail": {
        "id": number,
        "name": string,
        "mobile": string
    };
    "message": string;
}
export class DriverImageuploadresponse{
    "driverImage":string;
}

export class DriverAddExpRequest{
    "driver_id":number;
    "experience": string;
}
export class DeleteDriverRequest
{
    "id":number;
}
export class DriverAddBankRequest{
    "driver_id":number;
    "bank_name":string;
    "address1":string;
    "address2":string;
    "address3":string;
    "town":string;
    "postCode":string;
    "county":string;
    "country":string;
    "accName":string;
    "sortCode":string;
    "accountNumber":string;
}

export class DriverList{
    driverList:Array<DriverShowResponse>;
}

export class DriverDocsRequest{
 "driver_id":number;
 "driverlicensedue":string;
 "roadtacdue":string;
 "insurancedue":string;
 "motDue":string;
 "licensedue":string;
 "pcoCartestdue":string;
}

export class driverdetail{
    "id":number;
    "name":string;
    "call_sign":string;
    "salutation":string;
    "forename":string;
    "surname":string;
    "address1":string;
    "address2":string;
    "address3":string;
    "town":string;
    "postcode":string;
    "contry":string;
    "country":string;
    "telephone":string;
    "mobile":string;
    "emergency":string;
    "email":string;
    "vechile":string;
    "description":string;
    "registration_no":string;
    "booking_class":string;
    "DOB":Date;
    "NI_no":string;
    "start_date":string;
    "finish_date":string;
    "company":string;
    "shift":string;
    "driving_license_number":string;
    "adv_driving_coursce":string;
    "point":string;
    "point_dtails":string;
    "licensingAuthority":string;
    "badge_no":string;
    "license_no":string;
    "operator_license_no":string;
    "vat_reg":number;
    "vat_reg_no":number;
    "inPcoDriverList":number;
    "hideCstAccNo":number;
    "hidePassPhno":number;
    "hidePassMobno":number;
    "hidePassEmail":number;
    "hidePaNo":number;
}
