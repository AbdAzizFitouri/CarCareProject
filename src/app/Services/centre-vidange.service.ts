import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreVidange } from '../Models/centreVidange';

@Injectable({
  providedIn: 'root'
})
export class CentreVidangeService {

  private baseUrl = 'http://localhost:7999';

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get(this.baseUrl+"/listCentreVidange");
  }

  public save(centreVidange: any){
    return this.http.post<CentreVidange>(this.baseUrl+"/addCentreVidange",centreVidange);
  }

  public delete(id: number){
    return this.http.delete(this.baseUrl+"/deleteCentreVidange/"+id);
  }

  public update(centreVidange : CentreVidange){
    return this.http.post(this.baseUrl+"/updateCentreVidange",centreVidange);
  }

}
