import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreVisiteService } from 'src/app/Services/centre-visite.service';
import { CentreVisite } from 'src/app/Models/centreVisite';
import { CentreVisiteData } from 'src/app/Models/CentreVisiteData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-visite-update',
  templateUrl: './centre-visite-update.component.html',
  styleUrls: ['./centre-visite-update.component.css']
})
export class CentreVisiteUpdateComponent implements OnInit {

  data: any;
  centreVisite : CentreVisite;
  
  constructor(private fb : FormBuilder, public centreVisiteService : CentreVisiteService, public router : Router) {
    this.data = this.router.getCurrentNavigation().extras.state as CentreVisiteData;
    console.log(this.data);
   }

  ngOnInit(){}

  formUCVS = this.fb.group({
    idCentreVisite : ['',Validators.required],
    nameCentreVisite : ['',Validators.required],
    localCentreVisite : ['',Validators.required],
    horiareCentreVisite : ['',Validators.required],
    numeroTelCentreVisite : ['',Validators.required]
  })

  onSubmit(){
    if(this.formUCVS.value != null){
      console.log(this.formUCVS.value);
      let cvs1 = new CentreVisite();
      cvs1.idCentreVisite=this.formUCVS.get('idCentreVisite').value;
      cvs1.nameCentreVisite=this.formUCVS.get('nameCentreVisite').value;
      cvs1.localCentreVisite=this.formUCVS.get('localCentreVisite').value;
      cvs1.horiareCentreVisite=this.formUCVS.get('horiareCentreVisite').value;
      cvs1.numeroTelCentreVisite=this.formUCVS.get('numeroTelCentreVisite').value;
      this.centreVisiteService.update(cvs1).subscribe((data)=>{
        this.data = data as any;
      });
      this.router.navigateByUrl('/listCentreVisite');
    }
  }

}
