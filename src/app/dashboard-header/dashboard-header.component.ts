import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
 constructor(public router:Router){}

  logout(){
    console.log("hello logout clicked");
    localStorage.removeItem("token")
    this.router.navigate(['/'])
  }
}
