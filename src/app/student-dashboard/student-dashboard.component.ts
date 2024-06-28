import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  currentUser: any; // Variable to hold current user info

  constructor() {}

  ngOnInit(): void {
    // Retrieve user info from localStorage or service
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('Current User:', this.currentUser);
  }
}
