import { Component, OnInit } from '@angular/core';
import { CentreAssurance } from 'src/app/Models/CentreAssurance';
import { CentreAssuranceService } from 'src/app/Services/centre-assurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-assurance-list',
  templateUrl: './centre-assurance-list.component.html',
  styleUrls: ['./centre-assurance-list.component.css']
})
export class CentreAssuranceListComponent implements OnInit {

  centreAssurance : CentreAssurance[];
  data: any;
  response : any;


  constructor(private centreAssuranceService : CentreAssuranceService, public router : Router) { }

  ngOnInit(){
    this.centreAssuranceService.findAll().subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }

  deleteCentreAssurance(id){
    this.centreAssuranceService.delete(id).subscribe(Response => {
      this.response = Response as any;
    });
    this.ngOnInit();
    window.location.reload();
  }

  ca : CentreAssurance;
  RowSelected(ca){
    this.router.navigateByUrl('/updateCentreAssurance', {state : ca});
  }

}
