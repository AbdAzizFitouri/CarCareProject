import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreVisite } from '../Models/centreVisite';

@Injectable({
  providedIn: 'root'
})
export class CentreVisiteService {

  private baseUrl = 'http://localhost:7999';

  constructor(private http : HttpClient) { }

  public findAll(){
    return this.http.get(this.baseUrl+"/listCentreVisite");
  }

  public save(centreVisite: any){
    return this.http.post<CentreVisite>(this.baseUrl+"/addCentreVisite",centreVisite);
  }

  public delete(id: number){
    return this.http.delete(this.baseUrl+"/deleteCentreVisite/"+id);
  }

  public update(centreVisite : CentreVisite){
    return this.http.post(this.baseUrl+"/updateCentreVisite",centreVisite);
}

}