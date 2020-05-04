import { Component, OnInit } from '@angular/core';
import { CentreAssurance } from 'src/app/Models/CentreAssurance';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreAssuranceService } from 'src/app/Services/centre-assurance.service';
import { Router } from '@angular/router';
import { CentreAssuranceData } from 'src/app/Models/CentreAssuranceData';

@Component({
  selector: 'app-centre-assurance-update',
  templateUrl: './centre-assurance-update.component.html',
  styleUrls: ['./centre-assurance-update.component.css']
})
export class CentreAssuranceUpdateComponent implements OnInit {

  data:any;
  centreAssurance : CentreAssurance;
  
  constructor(private fb : FormBuilder, public centreAssuranceService : CentreAssuranceService , public router : Router) {
    this.data = this.router.getCurrentNavigation().extras.state as CentreAssuranceData;
    console.log(this.data);
   }

  ngOnInit(){}

   formUCA = this.fb.group({
    idCentreAssurance : ['',Validators.required],
    nameCentreAssurance : ['',Validators.required],
    localCentreAssurance : ['',Validators.required],
    horaireCentreAssurance : ['',Validators.required],
    numeroTelCentreAssurance : ['',Validators.required]
   })

   onSubmit(){
     if(this.formUCA.value != null){
       console.log(this.formUCA.value);
       let ca = new CentreAssurance();
       ca.idCentreAssurance=this.formUCA.get('idCentreAssurance').value;
       ca.nameCentreAssurance=this.formUCA.get('nameCentreAssurance').value;
       ca.localCentreAssurance=this.formUCA.get('localCentreAssurance').value;
       ca.horaireCentreAssurance=this.formUCA.get('horaireCentreAssurance').value;
       ca.numeroTelCentreAssurance=this.formUCA.get('numeroTelCentreAssurance').value;
       this.centreAssuranceService.update(ca).subscribe((data)=>{
         this.data = data as any;
       });
     }
     this.router.navigateByUrl('/listCentreAssurance');
   }


}
