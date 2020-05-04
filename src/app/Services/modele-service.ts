import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modele } from '../Models/Modele';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  private baseUrl = 'http://localhost:7999';

  constructor(private http: HttpClient) { }

  public findAll(){
    //this.baseUrl= this.baseUrl+"/listMarques"; 
     return this.http.get(this.baseUrl+"/listModele");
   }

   public save(modele: any){
    //this.baseUrl = this.baseUrl+"/addMarque";
     return this.http.post(this.baseUrl+"/addModele", modele);
   }

   public delete(id: number){
    return this.http.delete(this.baseUrl+"/deleteModele/"+id);
  }

  public update(modele : Modele){
    return this.http.post(this.baseUrl+"/updateModele",modele);
  }


}
