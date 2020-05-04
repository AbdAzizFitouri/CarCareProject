import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentreVidange } from 'src/app/Models/centreVidange';
import { Router } from '@angular/router';
import { CentreVidangeService } from 'src/app/Services/centre-vidange.service';

@Component({
  selector: 'app-centre-vidange-form',
  templateUrl: './centre-vidange-form.component.html',
  styleUrls: ['./centre-vidange-form.component.css']
})
export class CentreVidangeFormComponent implements OnInit {

  constructor(private fb : FormBuilder, public centreVidangeService : CentreVidangeService, public router : Router) { }


  ngOnInit(){ }

  formCV = this.fb.group({
    nameCentreVidange : ['',Validators.required],
    localCentreVidange : ['',Validators.required],
    horaireCentreVidange : ['',Validators.required],
    numeroTelCentreVidange : ['',Validators.required]
  })

  centreVidange : CentreVidange;
  data : any;

  onSubmit(){
    this.centreVidange = new CentreVidange();
    this.centreVidange.nameCentreVidange=this.formCV.get('nameCentreVidange').value;
    this.centreVidange.localCentreVidange=this.formCV.get('localCentreVidange').value;
    this.centreVidange.horaireCentreVidange=this.formCV.get('horaireCentreVidange').value;
    this.centreVidange.numeroTelCentreVidange=this.formCV.get('numeroTelCentreVidange').value;
    this.centreVidangeService.save(this.centreVidange).subscribe((data) =>{
      this.data = data as any;
    });
    this.router.navigateByUrl('/listCentreVidange');
  }

}
