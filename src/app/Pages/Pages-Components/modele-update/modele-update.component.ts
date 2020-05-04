import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/Services/modele-service';
import { MarqueService } from 'src/app/Services/marque.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Modele } from 'src/app/Models/Modele';
import { ModeleData } from 'src/app/Models/ModeleData';

@Component({
  selector: 'app-modele-update',
  templateUrl: './modele-update.component.html',
  styleUrls: ['./modele-update.component.css']
})
export class ModeleUpdateComponent implements OnInit {

  dataGo : any;
  data : any;

  
  constructor(private fb : FormBuilder, public modeleService : ModeleService, public router : Router, public marqueService : MarqueService) {
    this.data = this.router.getCurrentNavigation().extras.state as ModeleData;
    console.log(this.data);
   }

  ngOnInit(){
    this.marqueService.findAll().subscribe(data =>{
      this.dataGo=data;
    })
  }

  formUMD = this.fb.group({
    idModele : ['',Validators.required],
    nameModele : ['',Validators.required],
    nameMarque : ['',Validators.required],
    yearModele : ['',Validators.required]
  })

  modele : Modele;
  
  onSubmit(){
    if(this.formUMD.value != null){
      console.log(this.formUMD.value);
      let modele = new Modele();
      modele.idModele=this.formUMD.get('idModele').value;
      modele.nameModele=this.formUMD.get('nameModele').value;
      modele.nameMarque=this.formUMD.get('nameMarque').value;
      modele.yearModele=this.formUMD.get('yearModele').value;
      this.modeleService.update(modele).subscribe((data)=>{
        this.data = data as any;
      });
      this.router.navigateByUrl('/listModele');
    }



}
}