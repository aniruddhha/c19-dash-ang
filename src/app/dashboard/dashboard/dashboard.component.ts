import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../http/datasource.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataSourceService]
})
export class DashboardComponent implements OnInit {

  isSideBarToggled = true
  isActionPressed = false
  userName: string | null = null

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('user')
  }

  onSideBarToggle() {
    this.isSideBarToggled = !this.isSideBarToggled;
  }

  onLogOut() {
    localStorage.clear()
    this.router.navigate(['./auth/'])
  }
}
