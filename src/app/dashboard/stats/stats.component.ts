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
    { data: [10000, 8000, 9000, 10000, 15000, 18000, 16000, 11000, 8000, 5000, 800, 10000, 11000, 8000] },
  ];
  public lineChartLabels: Label[] = ['Mar20', 'Apr20', 'May20', 'Jun20', 'Jul20', 'Aug20', 'Sep20', 'Oct20', 'Nov20', 'Dec20', 'Jan21', 'Feb21', 'Mar21'];
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
  public barChartLabels: Label[] = ['Mar20', 'Apr20', 'May20', 'Jun20', 'Jul20', 'Aug20', 'Sep20', 'Oct20', 'Nov20', 'Dec20', 'Jan21', 'Feb21', 'Mar21'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [1000, 800, 900, 1000, 1500, 1800, 1100, 800, 600, 100, 10, 10, 2, 100], maxBarThickness: 25 }
  ];

  constructor(
    private datasource: DataSourceService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
