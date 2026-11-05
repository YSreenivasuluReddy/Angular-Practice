import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule }
from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule }
from '@angular/forms';

import { HttpClientModule }
from '@angular/common/http';

import { ToastrModule }
from 'ngx-toastr';

import { NgApexchartsModule }
from 'ng-apexcharts';

/* COMPONENTS */

import { NavbarComponent }
from './shared/navbar/navbar.component';

import { SidebarComponent }
from './shared/sidebar/sidebar.component';

import { FooterComponent }
from './shared/footer/footer.component';

import { LoaderComponent }
from './shared/loader/loader.component';

import { LoginComponent }
from './authentication/login/login.component';

import { RegisterComponent }
from './authentication/register/register.component';

import { CandidateDashboardComponent }
from './candidate/dashboard/dashboard.component';
import { CompanyDashboardComponent }
from './company/dashboard/dashboard.component';
import { AdminDashboardComponent }
from './admin/dashboard/dashboard.component';

import { ProfileComponent }
from './candidate/profile/profile.component';

import { ResumeUploadComponent }
from './candidate/resume-upload/resume-upload.component';

import { AppliedJobsComponent }
from './candidate/applied-jobs/applied-jobs.component';

import { JobListComponent }
from './jobs/job-list/job-list.component';

import { JobDetailsComponent }
from './jobs/job-details/job-details.component';

import { ResumeAnalyzerComponent }
from './ai/resume-analyzer/resume-analyzer.component';

@NgModule({
  declarations: [

    AppComponent,

    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoaderComponent,

    LoginComponent,
    RegisterComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    ResumeUploadComponent,
    AppliedJobsComponent,

    JobListComponent,
    JobDetailsComponent,

    ResumeAnalyzerComponent

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,

    ToastrModule.forRoot()

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }