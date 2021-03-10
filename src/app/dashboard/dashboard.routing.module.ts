import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { StatsComponent } from './stats/stats.component';

const dashRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'stats', component: StatsComponent }
]

const routes: Routes = [
    { path: '', component: DashboardComponent, children: dashRoutes },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }