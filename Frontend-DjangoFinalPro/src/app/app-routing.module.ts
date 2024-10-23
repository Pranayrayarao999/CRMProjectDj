import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './Home/first-page/first-page.component';
import { LeadsComponent } from './Home/leads/leads.component';
import { AboutComponent } from './Home/about/about.component';
import { TodayLeadsComponent } from './Home/today-leads/today-leads.component';
import { CourseComponent } from './Courses/course/course.component';
import { CounsellingComponent } from './Courses/counselling/counselling.component';
import { UpdateLeadsComponent } from './Home/update-leads/update-leads.component';
import { LeadHomeComponent } from './Home/lead-home/lead-home.component';
import { OpportunityDataLeadsComponent } from './DataCountLeads/opportunity-data-leads/opportunity-data-leads.component';
import { WarmLeadsDataComponent } from './DataCountLeads/warm-leads-data/warm-leads-data.component';
import { AttemptedLeadsDataComponent } from './DataCountLeads/attempted-leads-data/attempted-leads-data.component';
import { ULoginComponent } from './ulogin/ulogin.component';
import { StudentViewsComponent } from './Home/student-views/student-views.component';
import { authGuard } from './auth.guard';
import { JobFairComponent } from './Home/job-fair/job-fair.component';
import { TodayDataComponent } from './Home/today-data/today-data.component';
import { YesterdayDataComponent } from './Home/yesterday-data/yesterday-data.component';
import { UsignupComponent } from './usignup/usignup.component';

const routes: Routes = [
  {path:'',redirectTo: 'UserLogin', pathMatch: 'full'},       //default route
  // {path: '**',component:ULoginComponent },        
  // Canactivated - for firstpage
  {path:'FirstPage',component:FirstPageComponent, canActivate: [authGuard]},     
  {path:'CreateLeads',component: LeadsComponent, canActivate: [authGuard]},
  {path:'UpdateLeads/:id/',component:UpdateLeadsComponent, canActivate: [authGuard]},
  {path:'TodayLeads',component: TodayLeadsComponent, canActivate: [authGuard]},
  {path:'About', component: AboutComponent, canActivate: [authGuard]},
  {path:'AllCourse', component:CourseComponent, canActivate: [authGuard]},
  {path:'Counselling',component:CounsellingComponent, canActivate: [authGuard]},
  {path:'LeadHome', component:LeadHomeComponent, canActivate: [authGuard]},
  {path:'OpportunityDataL',component:OpportunityDataLeadsComponent, canActivate: [authGuard]},
  {path:'WarmDataL',component:WarmLeadsDataComponent, canActivate: [authGuard]},
  {path:'AttemptedDataL',component:AttemptedLeadsDataComponent, canActivate: [authGuard]},
  // USER LOGIN
  {path:'UserLogin',component:ULoginComponent},        // Admin@gmail.com, admin -- uname,pass
  {path:'SViews',component:StudentViewsComponent, canActivate: [authGuard]},
  {path:'JobFair',component: JobFairComponent, canActivate: [authGuard]},
  {path:'TData',component: TodayDataComponent, canActivate: [authGuard]},
  {path:'YData',component:YesterdayDataComponent, canActivate: [authGuard]},
  
  // USER SIGNUP
  {path:'UserRegister', component: UsignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
