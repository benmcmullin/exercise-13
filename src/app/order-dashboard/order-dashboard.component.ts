import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  constructor() {
  }

 isStarted: boolean=true;
 ngOnInit(): void {
}
allOrders = [];
workdayStarts () {

  setInterval(() => {
    this.allOrders.push('New Order:')

  }, 2000)
}
workdayEnds () {

}
}
