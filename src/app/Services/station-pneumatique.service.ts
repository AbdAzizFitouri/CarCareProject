import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationPneumatique } from '../Models/stationPneumatique';

@Injectable({
  providedIn: 'root'
})
export class StationPneumatiqueService {

  private baseUrl = 'http://localhost:7999';
  
  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get(this.baseUrl+"/listStationsPneumatique");
  }

  public save(stationPneumatique: any){
    return this.http.post(this.baseUrl+"/addStationPneumatique",stationPneumatique);
  }

  public delete(id: number){
    return this.http.delete(this.baseUrl+"/deleteStationPneumatique/"+id);
  }

  public update(stationPneumatique : StationPneumatique){
    return this.http.post(this.baseUrl+"/updateStationPneumatique",stationPneumatique);
  }



}
