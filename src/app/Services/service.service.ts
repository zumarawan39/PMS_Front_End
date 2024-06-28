import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api="http://localhost:3000";
  constructor(private http:HttpClient ) { }
  //signin tecaher
  Sign_in(data:any):Observable<any>{    
    console.log(data);
      return    this.http.post<any>(`${this.api}/post`,data); ;
  }
  //login teacher
  login(data:any):Observable<any>{    
    console.log(data);
      return    this.http.post<any>(`${this.api}/login`,data); 
  };
//sign in student
  sign_in_Student(data: any): Observable<any> {
    localStorage.setItem("token", data.token); // Store the token in localStorage
    return this.http.post<any>(`${this.api}/student_signup`, data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${data.token}`)
    });
  }
  // get all students 
  getAllStd(): Observable<any> {
    const token = localStorage.getItem("token");
    console.log("Service token:", token);
    let headers=  new HttpHeaders().set('authorization', `Bearer ${token}`);
    
    return this.http.get(`${this.api}/Allget`,{headers});
  };
  //delete student
  deleteStudent(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('authorization', `Bearer ${token}`);
    return this.http.delete(`${this.api}/student/${id}`, { headers });    
  }
  updateStudent(id: any, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.api}/student/${id}`, data, { headers });
  }
  login_std(data:any):Observable<any>{    
      return    this.http.post<any>(`${this.api}/std_login`,data); 
  };
}
