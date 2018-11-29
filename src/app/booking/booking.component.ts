import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent { 
  model1: Date;
  model2: Date;
  model3: Date;
  model4: Date;
    

  show:boolean=false;
  showfilter(e){
    if(e.target.checked){
      this.show= true;
    } else {
      this.show= false;
    }
  }


}
