import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { TecaherDashboardComponent } from './tecaher-dashboard/tecaher-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { StdLoginComponent } from './std-login/std-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    TecaherDashboardComponent,
    HeaderComponent,
    DashboardHeaderComponent,
    StdLoginComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
