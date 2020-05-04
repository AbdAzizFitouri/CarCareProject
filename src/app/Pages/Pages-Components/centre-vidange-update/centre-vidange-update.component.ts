import { Component, OnInit } from '@angular/core';
import { CentreVidange } from 'src/app/Models/centreVidange';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreVidangeService } from 'src/app/Services/centre-vidange.service';
import { Router } from '@angular/router';
import { CentreVidangeData } from 'src/app/Models/CentreVidangeData';

@Component({
  selector: 'app-centre-vidange-update',
  templateUrl: './centre-vidange-update.component.html',
  styleUrls: ['./centre-vidange-update.component.css']
})
export class CentreVidangeUpdateComponent implements OnInit {

  data :any;
  centreVidange : CentreVidange;

  constructor(private fb : FormBuilder, public centreVidangeService : CentreVidangeService, public router : Router) {
    this.data = this.router.getCurrentNavigation().extras.state as CentreVidangeData;
    console.log(this.data);
   }

  ngOnInit(){}

  formUCV = this.fb.group({
    idCentreVidange : ['',Validators.required],
    nameCentreVidange : ['',Validators.required],
    localCentreVidange : ['',Validators.required],
    horaireCentreVidange : ['',Validators.required],
    numeroTelCentreVidange : ['',Validators.required]
  })

onSubmit(){
  if(this.formUCV.value != null){
    console.log(this.formUCV.value);
    let cv1 = new CentreVidange();
    cv1.idCentreVidange=this.formUCV.get('idCentreVidange').value;
    cv1.nameCentreVidange=this.formUCV.get('nameCentreVidange').value;
    cv1.localCentreVidange=this.formUCV.get('localCentreVidange').value;
    cv1.horaireCentreVidange=this.formUCV.get('horaireCentreVidange').value;
    cv1.numeroTelCentreVidange=this.formUCV.get('numeroTelCentreVidange').value;
    console.warn(cv1);
    this.centreVidangeService.update(cv1).subscribe((data)=>{
      this.data = data as any;
    });
  }
  this.router.navigateByUrl('/listCentreVidange');
}



}
