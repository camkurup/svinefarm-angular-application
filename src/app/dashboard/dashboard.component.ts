import { Component } from '@angular/core';
import { Dashboard } from '../dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboard : Dashboard = {
    Temperature: 12,
    LigthInStable: 'true'
  };
}
