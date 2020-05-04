import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MarqueListComponent } from './Pages/Pages-Components/marque-list.component';
import { MarqueFromComponent } from './Pages/Pages-Components/marque-from.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MarqueService } from './Services/marque.service';
import { StationPneumatiqueListComponent } from './Pages/Pages-Components/station-pneumatique-list/station-pneumatique-list.component';
import { StationPneumatiqueService } from './Services/station-pneumatique.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatIconModule} from '@angular/material/icon';
import { CentreVidangeListComponent } from './Pages/Pages-Components/centre-vidange-list/centre-vidange-list.component';
import { CentreVidangeService } from './Services/centre-vidange.service';
import { CentreVisiteService } from './Services/centre-visite.service';
import { CentreVisiteListComponent } from './Pages/Pages-Components/centre-visite-list/centre-visite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StationPneumatiqueFormComponent } from './Pages/Pages-Components/station-pneumatique-form/station-pneumatique-form.component';
import { MarqueFormUpdateComponent } from './Pages/Pages-Components/marque-form-update/marque-form-update.component';
import { StationPneumatiqueUpdateComponent } from './Pages/Pages-Components/station-pneumatique-update/station-pneumatique-update.component';
import { CentreVidangeFormComponent } from './Pages/Pages-Components/centre-vidange-form/centre-vidange-form.component';
import { CentreVidangeUpdateComponent } from './Pages/Pages-Components/centre-vidange-update/centre-vidange-update.component';
import { CentreVisiteFormComponent } from './Pages/Pages-Components/centre-visite-form/centre-visite-form.component';
import { CentreVisiteUpdateComponent } from './Pages/Pages-Components/centre-visite-update/centre-visite-update.component';
import { ModeleListComponent } from './Pages/Pages-Components/modele-list/modele-list.component';
import { ModeleService } from './Services/modele-service';
import { ModeleUpdateComponent } from './Pages/Pages-Components/modele-update/modele-update.component';
import { ModeleFormComponent } from './Pages/Pages-Components/modele-form/modele-form.component';
import { CentreAssuranceListComponent } from './Pages/Pages-Components/centre-assurance-list/centre-assurance-list.component';
import { CentreAssuranceFormComponent } from './Pages/Pages-Components/centre-assurance-form/centre-assurance-form.component';
import { CentreAssuranceUpdateComponent } from './Pages/Pages-Components/centre-assurance-update/centre-assurance-update.component';
import { CentreAssuranceService } from './Services/centre-assurance.service';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AuthenticationComponent } from './Pages/Pages-Components/security-forms/authentication-form/authentication/authentication.component';
import { NewAccountComponent } from './Pages/Pages-Components/security-forms/new-account-form/new-account/new-account.component';


@NgModule({
  declarations: [
    AppComponent,
    MarqueListComponent,
    MarqueFromComponent,
    StationPneumatiqueListComponent,
    CentreVidangeListComponent,
    CentreVisiteListComponent,
    CentreVisiteListComponent,
    StationPneumatiqueFormComponent,
    MarqueFormUpdateComponent,
    StationPneumatiqueUpdateComponent,
    CentreVidangeFormComponent,
    CentreVidangeUpdateComponent,
    CentreVisiteFormComponent,
    CentreVisiteUpdateComponent,
    ModeleListComponent,
    ModeleUpdateComponent,
    ModeleFormComponent,
    CentreAssuranceListComponent,
    CentreAssuranceFormComponent,
    CentreAssuranceUpdateComponent,
    AdminNavComponent,
    AuthenticationComponent,
    NewAccountComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
    
  ],
  providers: [MarqueService,StationPneumatiqueService,CentreVidangeService,CentreVisiteService,ModeleService,CentreAssuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
