import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Marque } from '../Models/marque';

@Injectable({providedIn: 'root'})
export class MarqueService {

  private baseUrl = 'http://localhost:7999';

  constructor(private http: HttpClient) {
   }

   public findAll(){
    //this.baseUrl= this.baseUrl+"/listMarques"; 
     return this.http.get(this.baseUrl+"/listMarques");
   }

   public save(marque: any){
    //this.baseUrl = this.baseUrl+"/addMarque";
     return this.http.post(this.baseUrl+"/addMarques", marque);
   }

   public delete(id: number){
     return this.http.delete(this.baseUrl+"/deleteMarque/"+id);
   }

   public update(marque : Marque){
     return this.http.post(this.baseUrl+"/updateMarque",marque);
   }

}
