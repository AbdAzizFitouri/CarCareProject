import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreAssuranceService } from 'src/app/Services/centre-assurance.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreAssurance } from 'src/app/Models/CentreAssurance';

@Component({
  selector: 'app-centre-assurance-form',
  templateUrl: './centre-assurance-form.component.html',
  styleUrls: ['./centre-assurance-form.component.css']
})
export class CentreAssuranceFormComponent implements OnInit {

  constructor(private fb : FormBuilder, public centreAssuranceService : CentreAssuranceService, public router : Router) { }

  ngOnInit(){}

  formCA = this.fb.group({
    nameCentreAssurance : ['',Validators.required],
    localCentreAssurance : ['',Validators.required],
    horaireCentreAssurance : ['',Validators.required],
    numeroTelCentreAssurance : ['',Validators.required]
  })

  centreAssurance : CentreAssurance;
  data : any;

  onSubmit(){
    this.centreAssurance = new CentreAssurance();
    this.centreAssurance.nameCentreAssurance=this.formCA.get('nameCentreAssurance').value;
    this.centreAssurance.localCentreAssurance=this.formCA.get('localCentreAssurance').value;
    this.centreAssurance.horaireCentreAssurance=this.formCA.get('horaireCentreAssurance').value;
    this.centreAssurance.numeroTelCentreAssurance=this.formCA.get('numeroTelCentreAssurance').value;
    this.centreAssuranceService.save(this.centreAssurance).subscribe((data)=>{
      this.data = data as any;
    });
    this.router.navigateByUrl('/listCentreAssurance');
  }

}
