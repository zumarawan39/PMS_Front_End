import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { ServiceService } from '../Services/service.service';

@Component({
    selector: 'app-teacher-dashboard',
    templateUrl: './tecaher-dashboard.component.html',
    styleUrls: ['./tecaher-dashboard.component.css']
  })
export class TecaherDashboardComponent implements OnInit {
  registrationForm!: FormGroup;
  response: any[] = [];
  editingStudent: any = null; //track the student being edited 
  constructor(
    private fb: FormBuilder,
    public apiservice: ServiceService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const localStorage = this.document.defaultView?.localStorage;
      if (localStorage) {
        const token = localStorage.getItem("token");
        if (token) {
          const data = this.registrationForm.value;
          this.apiservice.sign_in_Student({ token, data }).subscribe((res: any) => {
            this.response = res.user;
            console.log('Form submitted:', this.registrationForm.value);
            this.getAllStudents();
          });
        } else {
          console.error('Token not available. Form not submitted.');
        }
      } else {
        console.error('localStorage not available. Form not submitted.');
      }
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
 
  
  getAllStudents() {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      const token = localStorage.getItem("token");
      console.log("getAllStudents token============>", token);
      if (token) {
        this.apiservice.getAllStd().subscribe((res: any[]) => {
          this.response = res;
          console.log('All students:', this.response);
        });
      } else {
        console.error('Token not available.');
      }
    } else {
      console.error('localStorage not available.');
    }
  }
  edit(student: any) {
    console.log("edit clicked", student);
    this.editingStudent = student; // Set the student to be edited
    this.registrationForm.patchValue({
      name: student.name,
      email: student.email,
      password: student.password
    });
  }

  updateStudent(id: any, data: any) {
    console.log("update clicked", id, data);
    this.apiservice.updateStudent(id, data).subscribe((res: any) => {
      console.log(res);
      this.editingStudent = null; // Clear editingStudent after update
      this.response = res.students;
    }, error => {
      console.error('Error occurred while updating student:', error);
    });
  }
  delete(id: any) {
    console.log(id);
    this.apiservice.deleteStudent(id).subscribe((res: any) => {
      console.log(res);
      
      this.response = res.students;
    });
  }
}
