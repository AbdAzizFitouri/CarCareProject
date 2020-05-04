import { NgModule } from "@angular/core";
import { MarqueListComponent } from './Pages/Pages-Components/marque-list.component';
import { MarqueFromComponent } from './Pages/Pages-Components/marque-from.component';
import { RouterModule, Routes } from '@angular/router';
import { StationPneumatiqueListComponent } from './Pages/Pages-Components/station-pneumatique-list/station-pneumatique-list.component';
import { CentreVidangeListComponent } from './Pages/Pages-Components/centre-vidange-list/centre-vidange-list.component';
import { CentreVisiteListComponent } from './Pages/Pages-Components/centre-visite-list/centre-visite-list.component';
import { StationPneumatiqueFormComponent } from './Pages/Pages-Components/station-pneumatique-form/station-pneumatique-form.component';
import { MarqueFormUpdateComponent } from './Pages/Pages-Components/marque-form-update/marque-form-update.component';
import { StationPneumatiqueUpdateComponent } from './Pages/Pages-Components/station-pneumatique-update/station-pneumatique-update.component';
import { CentreVidangeFormComponent } from './Pages/Pages-Components/centre-vidange-form/centre-vidange-form.component';
import { CentreVidangeUpdateComponent } from './Pages/Pages-Components/centre-vidange-update/centre-vidange-update.component';
import { CentreVisiteFormComponent } from './Pages/Pages-Components/centre-visite-form/centre-visite-form.component';
import { CentreVisiteUpdateComponent } from './Pages/Pages-Components/centre-visite-update/centre-visite-update.component';
import { ModeleListComponent } from './Pages/Pages-Components/modele-list/modele-list.component';
import { ModeleFormComponent } from './Pages/Pages-Components/modele-form/modele-form.component';
import { ModeleUpdateComponent } from './Pages/Pages-Components/modele-update/modele-update.component';
import { CentreAssuranceListComponent } from './Pages/Pages-Components/centre-assurance-list/centre-assurance-list.component';
import { CentreAssuranceFormComponent } from './Pages/Pages-Components/centre-assurance-form/centre-assurance-form.component';
import { CentreAssuranceUpdateComponent } from './Pages/Pages-Components/centre-assurance-update/centre-assurance-update.component';
import { AuthenticationComponent } from './Pages/Pages-Components/security-forms/authentication-form/authentication/authentication.component';
import { AppComponent } from './app.component';



const routes: Routes = [
    { path: 'listMarques', component: MarqueListComponent},
    { path: 'addMarque', component: MarqueFromComponent},
    { path: 'updateMarque', component: MarqueFormUpdateComponent},
    { path: 'addStationPneumatique', component: StationPneumatiqueFormComponent},
    { path: 'listStationsPneumatique', component: StationPneumatiqueListComponent},
    { path: 'updateStationPneumatique', component : StationPneumatiqueUpdateComponent},
    { path: 'listCentreVidange', component: CentreVidangeListComponent},
    { path: 'addCentreVidange', component: CentreVidangeFormComponent},
    { path: 'updateCentreVidage', component: CentreVidangeUpdateComponent},
    { path: 'listCentreVisite' , component: CentreVisiteListComponent},
    { path: 'addCentreVisite' , component: CentreVisiteFormComponent},
    { path: 'updateCentreVisite', component: CentreVisiteUpdateComponent},
    { path: 'listModele', component: ModeleListComponent},
    { path: 'addModele', component: ModeleFormComponent},
    { path: 'updateModele', component: ModeleUpdateComponent},
    { path: 'listCentreAssurance', component: CentreAssuranceListComponent},
    { path: 'addCentreAssurance', component: CentreAssuranceFormComponent},
    { path: 'updateCentreAssurance', component: CentreAssuranceUpdateComponent},
    { path: 'loginForm', component: AuthenticationComponent},
    { path: 'adminMain', component: AppComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}