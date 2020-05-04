import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreVisiteService } from 'src/app/Services/centre-visite.service';
import { Router } from '@angular/router';
import { CentreVisite } from 'src/app/Models/centreVisite';

@Component({
  selector: 'app-centre-visite-form',
  templateUrl: './centre-visite-form.component.html',
  styleUrls: ['./centre-visite-form.component.css']
})
export class CentreVisiteFormComponent implements OnInit {

  constructor(private fb : FormBuilder, public centreVisiteService : CentreVisiteService, public router : Router) { }

  ngOnInit(){}

  formCVS = this.fb.group({
    nameCentreVisite : ['',Validators.required],
    localCentreVisite : ['',Validators.required],
    horaireCentreVisite : ['',Validators.required],
    numeroTelCentreVisite : ['',Validators.required]
  })

  centreVisite : CentreVisite;
  data : any;

  onSubmit(){
    this.centreVisite = new CentreVisite();
    this.centreVisite.nameCentreVisite= this.formCVS.get('nameCentreVisite').value;
    this.centreVisite.localCentreVisite= this.formCVS.get('localCentreVisite').value;
    this.centreVisite.horiareCentreVisite=this.formCVS.get('horaireCentreVisite').value;
    this.centreVisite.numeroTelCentreVisite=this.formCVS.get('numeroTelCentreVisite').value;
    this.centreVisiteService.save(this.centreVisite).subscribe((data)=>{
      this.data = data as any;
    });
    this.router.navigateByUrl('/listCentreVisite');
  }

}
