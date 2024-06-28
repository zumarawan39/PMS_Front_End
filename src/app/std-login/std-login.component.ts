import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std-login',
  templateUrl: './std-login.component.html',
  styleUrl: './std-login.component.css'
})
export class StdLoginComponent {
  login_std!: FormGroup;

  constructor(private fb: FormBuilder, public apiservice: ServiceService,public router:Router) {
    this.login_std = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {}

  onSubmitS() {
    if (this.login_std.valid) {
      let data = this.login_std.value;
      this.apiservice.login_std(data).subscribe((res) => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        if (res.email) {
          this.router.navigate(['/std_dashboard']);
        } else {
          alert(res.message);
        }
      });
      console.log("form data ==>", data);
    }
  }

}
