import { Component, OnInit, Pipe, ElementRef, HostListener } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {VERSION} from '@angular/material';
@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class MyOrderComponent implements OnInit {
 
  jsObject = {
    '0': ["-0.00","-0.25","-0.75","+0.00","+0.25","+0.75"],
    '1': ["-1.00","-1.25","-1.75","+1.00","+1.25","+1.75"],
    '2': ["-2.00","-2.25","-2.75","+2.00","+2.25","+2.75"],
    '3': ["-3.00","-3.25","-3.75","+3.00","+3.25","+3.75"],
    '4': ["-4.00","-4.25","-4.75","+4.00","+4.25","+4.75"],
    '5': ["-5.00","-5.25","-5.75","+5.00","+5.25","+5.75"],
    '6': ["-6.00","-6.25","-6.75","+6.00","+6.25","+6.75"],
    '7': ["-7.00","-7.25","-7.75","+7.00","+7.25","+7.75"],
    '8': ["-8.00","-8.25","-8.75","+8.00","+8.25","+8.75"],
    '9': ["-9.00","-9.25","-9.75","+9.00","+9.25","+9.75"],
    '10': ["-10.00","-10.25","-10.75","+10.00","+10.25","+10.75"],
    '11': ["-11.00","-11.25","-11.75","+11.00","+11.25","+11.75"],
    '12': ["-12.00","-12.25","-12.75","+12.00","+12.25","+12.75"],
    '13': ["-13.00","-13.25","-13.75","+13.00","+13.25","+13.75"],
    '14': ["-14.00","-14.25","-14.75","+14.00","+14.25","+14.75"],
    '15': ["-15.00","-15.25","-15.75","+15.00","+15.25","+15.75"],
    '16': ["-16.00","-16.25","-16.75","+16.00","+16.25","+16.75"],
    '17': ["-17.00","-17.25","-17.75","+17.00","+17.25","+17.75"],
    '20': ["-20.00","-20.25","-20.75","+20.00","+20.25","+20.75"],
};
  searchlense="+2.00"
  searchlense1
  searchModel
  numberfor=0
  newArray=[]
  value=[]
  str3=""
  finished = false;
  uncut= false;
  both= false;
  onlyLeft= false;
  digital= false;
  onlyRight= false;
  version = VERSION;
  public text: String;
  constructor(private eRef: ElementRef) { }
   @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = "clicked inside";
    } else {
      this.text = "clicked outside";
    }
  }

  focusFunction() {
    document.getElementById("myForm").style.display = "block";
  }
  focusOutFunction() {
    document.getElementById("myForm").style.display = "none";
    
  }
  arrayFor(){
    console.log(this.searchlense.length);
      if(this.searchlense.length==6){
        this.searchlense1=this.searchlense.slice(1,3)
        console.log(this.searchlense1); 
    }
    
   if(this.searchlense.length>1 && (this.searchlense.charAt(0)=='-') || (this.searchlense.charAt(0)=='+')){
    this.searchlense1=this.searchlense.charAt(1)
   }
   if(this.searchlense.length==1){
    this.searchlense1=this.searchlense.charAt(0)
   }
   if(this.searchlense.length==3){
    this.searchlense1=this.searchlense.slice(1,3)
   }else if(this.searchlense.length==3){
    this.searchlense1=this.searchlense.slice(1,3)
   }
   if(this.searchlense.length==2){
    this.searchlense1=this.searchlense.slice(0,2)
   }
    var item;
    if( this.jsObject.hasOwnProperty(this.searchlense1) ) {
        item = this.jsObject[this.searchlense1];
        this.value=item;
        console.log( this.value);
    }
  }
  jobType(type){
    if(type=='finished'){
      this.finished = true;
    }else{
      this.finished = false;
      
    }
    if(type=='uncut'){
      this.uncut = true;
      
    }else{
      this.uncut = false;
    }
    if(type=='both'){
      this.both = true;
    }else{
      this.both = false;
    }
    if(type=='onlyLeft'){
      this.onlyLeft = true;
    }else{
      this.onlyLeft = false;
    }
    if(type=='onlyRight'){
      this.onlyRight = true;
    }else{
      this.onlyRight = false;
    }
    if(type=='digital'){
      this.digital = true;
    }else{
      this.digital = false;
    }
   
  }
  number(number){
    if(number=='clear'){
      this.searchlense = this.searchlense.slice(0, -1);
      console.log(this.searchlense)
      this.arrayFor()
    }
    if(number!='clear'){
   var str1=number
   console.log(str1);
     this.searchlense=this.searchlense.concat(str1)
    console.log(this.str3);
    this.arrayFor()
    }
    
      
  }
  clear(){
    this.searchlense = this.searchlense.slice(0, -1);
    console.log(this.searchlense)
  }
  ngOnInit() 
  {
    this.arrayFor()
  }

}
