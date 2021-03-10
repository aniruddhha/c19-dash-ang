import { Component, OnInit } from '@angular/core';
import { StateDetail } from './state.domain';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  stateDetail: StateDetail = {} as StateDetail

  stateDetails: Array<StateDetail> = new Array()

  constructor() { }

  ngOnInit(): void {
    this.stateDetails.push({
      name: 'Maharashtra',
      activeCases: 1000,
      curedCases: 5000,
      vaccinated: 3000,
      deaths: 100,
      stateHealth: 'good'
    })

    this.stateDetail.activeCases = 10000
    this.stateDetail.curedCases = 1000000
    this.stateDetail.vaccinated = 500000
    this.stateDetail.deaths = 100000
  }
}
