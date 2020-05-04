import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

  title : string;

  fTime : string;
  time1 : any;
  greeting : string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
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
