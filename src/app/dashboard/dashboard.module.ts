import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [DashboardComponent, StatsComponent, MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    ChartsModule
  ]
})
export class DashboardModule { }
