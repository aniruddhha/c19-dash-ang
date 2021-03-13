import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { DataSourceService } from '../http/datasource.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80
  };
  public pieChartLabels: Label[] = [
    'Active', 'Recovered', 'Deaths'
  ];
  public pieChartData: SingleDataSet = [11000, 8000, 2000];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public lineChartData: ChartDataSets[] = [
    { data: [] },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(255,0,0,0.4)',
      backgroundColor: 'rgba(255,0,0,0.2)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], maxBarThickness: 25 }
  ];

  totalConfirmed = 0
  totalRecovered = 0
  totalDeaths = 0

  constructor(
    private dataSource: DataSourceService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.dataSource.fetchConfirmedCases().subscribe(res => {
      console.log(res)
      this.lineChartLabels = Object.keys(res);
      this.lineChartData[0].data = Object.values(res);

      let total = 0
      this.lineChartData[0].data.forEach(dt => {
        total += (dt as number)
      })
      this.pieChartData[0] = total
    })

    this.dataSource.fetchDeathsCases().subscribe(res => {
      this.barChartLabels = Object.keys(res);
      this.barChartData[0].data = Object.values(res);

      let total = 0
      this.barChartData[0].data.forEach(dt => {
        total += (dt as number)
      })
      this.pieChartData[2] = total
    })

    this.dataSource.fetchRecoveredCases().subscribe(res => {

      let total = 0
      Object.values(res).forEach(dt => {
        total += (dt as number)
      })
      this.pieChartData[1] = total
    })
  }
}
