import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class CentreVidangeData{
    idCentreVidange: number;
    nameCentreVidange: string;
    localCentreVidange: string;
    longCentreVidange : string;
    latCentreVidange : string;
    horaireCentreVidange: string;
    numeroTelCentreVidange: string;
}