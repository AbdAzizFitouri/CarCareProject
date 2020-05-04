import { Component, OnInit } from '@angular/core';
import { Modele } from 'src/app/Models/Modele';
import { ModeleService } from 'src/app/Services/modele-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.css']
})
export class ModeleListComponent implements OnInit {

  modeles: Modele[];
  data : any;
  response : any;
  
  constructor(private modeleService : ModeleService, public router : Router) { }

  ngOnInit(){
    this.modeleService.findAll().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  deleteModele(id){
    console.log("id");
    console.log(id);
    this.modeleService.delete(id).subscribe(Response => {
      this.response = Response as any;
    });
    window.location.reload();
    this.ngOnInit();
  }

  modele : Modele;
  RowSelected(modele){
    console.log(modele);
    this.router.navigateByUrl('/updateModele',{ state : modele});
  }

}
