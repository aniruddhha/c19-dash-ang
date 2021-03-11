import { Component, OnInit } from '@angular/core';
import { Urls } from 'src/app/http/urls';
import { DataSourceService } from '../http/datasource.service';
import { Detail, StateDetail } from './state.domain';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  detail: Detail = {} as Detail

  details: Array<Detail> = new Array()
  st: string = ''

  constructor(
    private dataSource: DataSourceService
  ) { }

  ngOnInit(): void {
    this.dataSource.fetchStateWiseData().subscribe(
      res => this.details = res
    )
  }

  totalActive() {
    return this.details.reduce((prev, next) => prev + next.Active, 0);
  }

  totalDeaths() {
    return this.details.reduce((prev, next) => prev + next.Deaths, 0);
  }

  totalConfirmed() {
    return this.details.reduce((prev, next) => prev + next.Confirmed, 0);
  }

  totalRecovered() {
    return this.details.reduce((prev, next) => prev + next.Recovered, 0);
  }

  filterByState(st: string) {
    this.st = st
  }
}
