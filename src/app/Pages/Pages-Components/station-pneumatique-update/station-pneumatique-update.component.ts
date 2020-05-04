import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StationPneumatiqueService } from 'src/app/Services/station-pneumatique.service';
import { Router } from '@angular/router';
import { StationPneumatique } from 'src/app/Models/stationPneumatique';
import { StationPeumatiqueData } from 'src/app/Models/StationPneumatiqueData';

@Component({
  selector: 'app-station-pneumatique-update',
  templateUrl: './station-pneumatique-update.component.html',
  styleUrls: ['./station-pneumatique-update.component.css']
})
export class StationPneumatiqueUpdateComponent implements OnInit {

  data : any;
  stationPneumatique : StationPneumatique;

  constructor(private fb : FormBuilder, public stationPneumatiqueService : StationPneumatiqueService, public router: Router) { 
    this.data = this.router.getCurrentNavigation().extras.state as StationPeumatiqueData;
    console.log(this.data);
  }

  ngOnInit(){}



formUSP = this.fb.group({
  idStationPneumatique : ['',Validators.required],
  nameStationPneumatique : ['',Validators.required],
  localStationPneumatique : ['',Validators.required],
  horiareStationPneumatique : ['',Validators.required],
  numeroTelStationPneumatique : ['',Validators.required]
})

onSubmit(){
  if(this.formUSP.value != null){
    console.log(this.formUSP.value);
    let sp1 = new StationPneumatique();
    sp1.idStationPneumatique=this.formUSP.get('idStationPneumatique').value;
    sp1.nameStationPneumatique=this.formUSP.get('nameStationPneumatique').value;
    sp1.localStationPneumatique=this.formUSP.get('localStationPneumatique').value;
    sp1.horiareStationPneumatique=this.formUSP.get('horiareStationPneumatique').value;
    sp1.numeroTelStationPneumatique=this.formUSP.get('numeroTelStationPneumatique').value;
    console.warn(sp1);
    this.stationPneumatiqueService.update(sp1).subscribe((data)=>{
      this.data = data as any;
    })
  };
  this.router.navigateByUrl('/listStationsPneumatique');
}



}