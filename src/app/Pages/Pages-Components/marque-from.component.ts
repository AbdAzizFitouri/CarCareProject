import { Component, OnInit } from '@angular/core';
import { Marque } from '../../Models/marque';
import { MarqueService } from '../../Services/marque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MarqueListComponent } from './marque-list.component';

@Component({
  selector: 'app-marque-from',
  templateUrl: '../marque-from.component.html',
  styleUrls: ['../marque-from.component.css']
})
export class MarqueFromComponent implements OnInit{


  

  constructor(private fb : FormBuilder, public marqueService : MarqueService, public router : Router){}

  form = this.fb.group({
    nameMarque: ['',Validators.required],
    paysOrigine: ['',Validators.required]
  })
  
  
  marque : Marque;
  data:any;

  

    
  ngOnInit(){}


     onSubmit(){
       console.log(this.form.value);
       this.marque = new Marque();
       this.marque.nameMarque=this.form.get('nameMarque').value;
       this.marque.paysOrigine=this.form.get('paysOrigine').value;
       console.warn(this.marque);
       this.marqueService.save(this.marque).subscribe((data)=> {
        this.data=data as any; 
      }
      );
      this.router.navigateByUrl('/listMarques');
     }

}
