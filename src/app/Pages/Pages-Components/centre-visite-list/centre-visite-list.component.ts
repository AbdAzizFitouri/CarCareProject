import { Component, OnInit } from '@angular/core';
import { CentreVisite } from 'src/app/Models/centreVisite';
import { CentreVisiteService } from 'src/app/Services/centre-visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-visite-list',
  templateUrl: './centre-visite-list.component.html',
  styleUrls: ['./centre-visite-list.component.css']
})
export class CentreVisiteListComponent implements OnInit {

  centreVisite : CentreVisite[];
  data : any;
  response : any;

  constructor(private centreVisiteService : CentreVisiteService, public router: Router) { }

  ngOnInit(){
    this.centreVisiteService.findAll().subscribe(data =>{
      this.data=data;
      console.log(data);
    });
  }

  deleteCentreVisite(id){
    this.centreVisiteService.delete(id).subscribe(Response =>{
      this.response = Response as any;
    });
    console.log("after delete");
    window.location.reload();
    this.ngOnInit();
  }

  cvs : CentreVisite;
  RowSelected(cvs){
    this.router.navigateByUrl('/updateCentreVisite',{state : cvs});
  }

}
