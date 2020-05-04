import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StationPneumatiqueService } from 'src/app/Services/station-pneumatique.service';
import { Router } from '@angular/router';
import { StationPneumatique } from 'src/app/Models/stationPneumatique';

@Component({
  selector: 'app-station-pneumatique-form',
  templateUrl: './station-pneumatique-form.component.html',
  styleUrls: ['./station-pneumatique-form.component.css']
})
export class StationPneumatiqueFormComponent implements OnInit {

  constructor(private fb : FormBuilder, public stationPneumatiqueService : StationPneumatiqueService, public router: Router) { }

  ngOnInit(){
  }

  formSP = this.fb.group({
    nameStationPneumatique: ['',Validators.required],
    localStationPneumatique: ['',Validators.required],
    horaireStationPneumatique: ['',Validators.required],
    numeroTelStationPneumatique: ['',Validators.required]
  })

  stationPneumatique : StationPneumatique;
  data : any;


  onSubmit(){
    this.stationPneumatique = new StationPneumatique();
    this.stationPneumatique.nameStationPneumatique=this.formSP.get('nameStationPneumatique').value;
    this.stationPneumatique.localStationPneumatique=this.formSP.get('localStationPneumatique').value;
    this.stationPneumatique.horiareStationPneumatique=this.formSP.get('horaireStationPneumatique').value;
    this.stationPneumatique.numeroTelStationPneumatique=this.formSP.get('numeroTelStationPneumatique').value;
    this.stationPneumatiqueService.save(this.stationPneumatique).subscribe((data)=>{
      this.data=data as any;
    });
    this.router.navigateByUrl('/listStationsPneumatique');
  }

}
