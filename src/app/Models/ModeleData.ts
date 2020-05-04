import { Injectable } from "@angular/core";
import { Marque } from './marque';

@Injectable({
    providedIn : 'root'
})
export class ModeleData{
    idModele : number;
    nameModele : string;
    yearModele : number;
    marque : Marque;
}