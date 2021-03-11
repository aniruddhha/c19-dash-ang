import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { StateFilter } from './main/state.filter';

@NgModule({
  declarations: [
    DashboardComponent,
    StatsComponent,
    MainComponent,

    StateFilter
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    ChartsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
