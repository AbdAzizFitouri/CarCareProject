import { Component, OnInit } from '@angular/core';
import { CentreVidange } from 'src/app/Models/centreVidange';
import { CentreVidangeService } from 'src/app/Services/centre-vidange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-vidange-list',
  templateUrl: './centre-vidange-list.component.html',
  styleUrls: ['./centre-vidange-list.component.css']
})
export class CentreVidangeListComponent implements OnInit {

  centreVidange : CentreVidange[];
  data: any;
  response : any;

  constructor(private centreVidangeService : CentreVidangeService, public router : Router) { }

  ngOnInit(){
    this.centreVidangeService.findAll().subscribe(data =>{
      this.data=data;
      console.log(data);
    });

  }

  deleteCentreVidange(id){
    this.centreVidangeService.delete(id).subscribe(Response => {
      this.response = Response as any;
    });
    console.log("after delete");
    window.location.reload();
    this.ngOnInit();
  }

  cv: CentreVidange;
  RowSelected(cv){
    this.router.navigateByUrl('/updateCentreVidage',{state : cv});
  }

}
