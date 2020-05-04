import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreAssurance } from '../Models/CentreAssurance';

@Injectable({
  providedIn: 'root'
})
export class CentreAssuranceService {

  private baseUrl = 'http://localhost:7999';

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get(this.baseUrl+"/listCentreAssurance");
  }

  public save(centreAssurance: any){
    return this.http.post<CentreAssurance>(this.baseUrl+"/addCentreAssurance",centreAssurance);
  }

  public delete(id: number){
    return this.http.delete(this.baseUrl+"/deleteCentreAssurance/"+id);
  }

  public update(centreAssurance : CentreAssurance){
    return this.http.post(this.baseUrl+"/updateCentreAssurance",centreAssurance);
  }

}
