import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MarqueService } from 'src/app/Services/marque.service';
import { Router } from '@angular/router';
import { Marque } from 'src/app/Models/marque';
import { MarqueData } from 'src/app/Models/MarqueData';

@Component({
  selector: 'app-marque-form-update',
  templateUrl: './marque-form-update.component.html',
  styleUrls: ['./marque-form-update.component.css']
})
export class MarqueFormUpdateComponent implements OnInit {

  constructor(private fb : FormBuilder, public marqueService : MarqueService, public router: Router) { 
    this.data = this.router.getCurrentNavigation().extras.state as MarqueData;
    console.log(this.data);
  }

  formUM = this.fb.group({
    idMarque: ['',Validators.required],
    nameMarque: ['',Validators.required],
    paysOrigine: ['',Validators.required]
  })
  
  marque : Marque;
  data:any;

  ngOnInit(){
    
  }


     onSubmit(){
       if (this.formUM.value != null){
        console.log(this.formUM.value);
        let marque1 = new Marque();
       marque1.nameMarque=this.formUM.get('nameMarque').value;
       marque1.paysOrigine=this.formUM.get('paysOrigine').value;
       marque1.idMarque=this.formUM.get('idMarque').value;
       console.warn(marque1);
       this.marqueService.update(marque1).subscribe((data)=> {
        this.data=data as any; 
      }
      );
      this.router.navigateByUrl('/listMarques');

       }
     }  
}