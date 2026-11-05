import { NgModule } from '@angular/core';

import {
RouterModule,
Routes
} from '@angular/router';

import { LoginComponent }
from './authentication/login/login.component';

import { ProfileComponent }
from './candidate/profile/profile.component';

import { RegisterComponent }
from './authentication/register/register.component';

import { CandidateDashboardComponent }
from './candidate/dashboard/dashboard.component';

import { CompanyDashboardComponent }
from './company/dashboard/dashboard.component';

import { AdminDashboardComponent }
from './admin/dashboard/dashboard.component';

import { JobListComponent }
from './jobs/job-list/job-list.component';

import { ResumeAnalyzerComponent }
from './ai/resume-analyzer/resume-analyzer.component';

const routes: Routes = [

{
 path:'',
 component:LoginComponent
},

{
 path:'register',
 component:RegisterComponent
},

{
 path:'candidate-dashboard',
 component:CandidateDashboardComponent
},
{
 path:'company-dashboard',
 component:CompanyDashboardComponent
},
{
 path:'admin-dashboard',
 component:AdminDashboardComponent
},

{
 path:'jobs',
 component:JobListComponent
},
{
    path:'profile',
    component:ProfileComponent
},
{
 path:'resume-analyzer',
 component:ResumeAnalyzerComponent
}

];

@NgModule({

 imports: [
 RouterModule.forRoot(routes)
 ],

 exports: [
 RouterModule
 ]

})

export class AppRoutingModule { }