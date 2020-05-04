import { Injectable } from '@angular/core';


@Injectable({
    providedIn : 'root'
})
export class CentreAssuranceData{
    idCentreAssurance : number;
    nameCentreAssurance : string;
    localCentreAssurance : string;
    longCentreAssurance : string;
    latCentreAssurance : string;
    horaireCentreAssurance : string;
    numeroTelCentreAssurance : string;
}