import { Component, OnInit } from '@angular/core';
import { Marque } from '../../Models/marque';
import { MarqueService } from '../../Services/marque.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marque-list',
  templateUrl: '../marque-list.component.html',
  styleUrls: ['../marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  marques: Marque[];
  data:any;
  response:any;
  constructor(private marqueService : MarqueService, public router: Router) { }

  ngOnInit()
  {
      this.marqueService.findAll().subscribe(data => {
        this.data = data
      console.log(data)});
    }

   deleteMarque(id){
    console.log("id");
    console.log(id);
    this.marqueService.delete(id).subscribe(Response => {
      this.response = Response as any;
  });
  window.location.reload();
  this.ngOnInit(); 
}
marque : Marque;
RowSelected(marque){
  console.log(marque);
  this.router.navigateByUrl('/updateMarque',{ state: marque });
}

}