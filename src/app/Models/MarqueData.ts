import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class MarqueData{
    idMarque: number;
    nameMarque: string;
    paysOrigine: string;
}