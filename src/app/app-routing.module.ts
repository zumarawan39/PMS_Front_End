import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TecaherDashboardComponent } from './tecaher-dashboard/tecaher-dashboard.component';
import { StdLoginComponent } from './std-login/std-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AuthGuard } from './auth.guard';  // Import AuthGuard

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  { path: 'std_login', component: StdLoginComponent },
  { path: 'sign_up', component: SignInComponent },
  { path: 'std_dashboard', component: StudentDashboardComponent },
  { path: 'teacher_dashboard', component: TecaherDashboardComponent, canActivate: [AuthGuard] }, // Protect this route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
