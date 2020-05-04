import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModeleService } from 'src/app/Services/modele-service';
import { Router } from '@angular/router';
import { MarqueService } from 'src/app/Services/marque.service';
import { Modele } from 'src/app/Models/Modele';

@Component({
  selector: 'app-modele-form',
  templateUrl: './modele-form.component.html',
  styleUrls: ['./modele-form.component.css']
})
export class ModeleFormComponent implements OnInit {

  data:any;
  
  constructor(private fb : FormBuilder, public modeleService : ModeleService, public router : Router, public marqueService : MarqueService) { }

  ngOnInit(){
    this.marqueService.findAll().subscribe(data =>{
      this.data=data;
    })
  }

  formMD = this.fb.group({
    nameModele : ['',Validators.required],
    nameMarque : ['',Validators.required],
    yearModele : ['',Validators.required]
  })

  modele : Modele;
  dataGo : any;

  onSubmit(){
    this.modele = new Modele();
    this.modele.nameModele=this.formMD.get('nameModele').value;
    this.modele.nameMarque=this.formMD.get('nameMarque').value;
    this.modele.yearModele=this.formMD.get('yearModele').value;
    console.log(this.modele);
    this.modeleService.save(this.modele).subscribe((data)=>{
      this.dataGo = data as any;
    });
    this.router.navigateByUrl('/listModele');
  }

}
