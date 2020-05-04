import { Component, HostBinding } from '@angular/core';
import { stringify } from 'querystring';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './Pages/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;

  fTime : string;
  time1 : any;
  greeting : string;

  constructor(){
    this.title= 'CarCare';
    this.time1 = this.timeManagement(this.time1);
    this.greeting = this.timeGreeting(this.time1);
  }

  theTime : any;
  currentTime : Date;
  

  timeManagement(time) : number{
    this.currentTime = new Date();
    time = this.currentTime.getHours();
    time = Number(time);
    return time;
  }

  timeGreeting(time):string{
    if(time > 4 && time <12){
      return "Bonjour, Admin";
    }else if (time >= 12 && time <18){
      return "Bon Aprés-Midi, Admin";
    }else if (time >=18 && time <=4){
      return "Bonsoir, Admin";
    }
  }

}
