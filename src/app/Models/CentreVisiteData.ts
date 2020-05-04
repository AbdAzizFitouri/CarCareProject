import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class CentreVisiteData{
    idCentreVisite : number;
    nameCentreVisite : string;
    localCentreVisite : string;
    longCentreVisite : string;
    latCentreVisite : string;
    horiareCentreVisite : string;
    numeroTelCentreVisite : string;
}