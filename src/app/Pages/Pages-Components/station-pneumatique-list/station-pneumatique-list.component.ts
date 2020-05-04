import { Component, OnInit } from '@angular/core';
import { StationPneumatique } from 'src/app/Models/stationPneumatique';
import { StationPneumatiqueService } from 'src/app/Services/station-pneumatique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-pneumatique-list',
  templateUrl: './station-pneumatique-list.component.html',
  styleUrls: ['./station-pneumatique-list.component.css']
})
export class StationPneumatiqueListComponent implements OnInit {

  stationPneumatique: StationPneumatique[];
  data: any;
  response: any;
  constructor(private stationPneumatiqueService : StationPneumatiqueService,public router: Router) { }

  ngOnInit() {
    this.stationPneumatiqueService.findAll().subscribe(data => {
      this.data = data;
      console.log(data)
    });

  }

  deleteStationPneumatique(id){
    this.stationPneumatiqueService.delete(id).subscribe(Response =>{
      this.response = Response as any;
    });
    this.ngOnInit();
  }

sp : StationPneumatique;
RowSelected(sp){
  this.router.navigateByUrl('/updateStationPneumatique',{state : sp});
}


}
