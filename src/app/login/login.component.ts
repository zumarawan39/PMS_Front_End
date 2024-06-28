import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;

  constructor(private fb: FormBuilder, public apiservice: ServiceService,public router:Router) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.login.valid) {
      let data = this.login.value;
      this.apiservice.login(data).subscribe((res) => {
        console.log(res); 
        if (res.token) {
          localStorage.setItem("token", res.token);
          this.router.navigate(['/teacher_dashboard']);
        } else {
          alert(res.message);
        }
      });
      console.log("form data ==>", data);
    }
  }
}
