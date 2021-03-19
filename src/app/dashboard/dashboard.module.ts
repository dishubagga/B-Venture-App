import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    DashboardRoutingModule,
    AngularMaterialModule
  ],
  providers: [],

})
export class DashboardModule { }
