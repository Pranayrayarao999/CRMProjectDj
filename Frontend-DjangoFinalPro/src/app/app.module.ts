import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './Home/first-page/first-page.component';
import { LeadsComponent } from './Home/leads/leads.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Home/about/about.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TodayLeadsComponent } from './Home/today-leads/today-leads.component';
import { CourseComponent } from './Courses/course/course.component';
import { CounsellingComponent } from './Courses/counselling/counselling.component';
import { UpdateLeadsComponent } from './Home/update-leads/update-leads.component';
import { LeadHomeComponent } from './Home/lead-home/lead-home.component';
import { OpportunityDataLeadsComponent } from './DataCountLeads/opportunity-data-leads/opportunity-data-leads.component';
import { WarmLeadsDataComponent } from './DataCountLeads/warm-leads-data/warm-leads-data.component';
import { AttemptedLeadsDataComponent } from './DataCountLeads/attempted-leads-data/attempted-leads-data.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ULoginComponent } from './ulogin/ulogin.component';
import { StudentViewsComponent } from './Home/student-views/student-views.component';
import { JobFairComponent } from './Home/job-fair/job-fair.component';
import { TodayDataComponent } from './Home/today-data/today-data.component';
import { YesterdayDataComponent } from './Home/yesterday-data/yesterday-data.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LeadsComponent,
    AboutComponent,
    TodayLeadsComponent,
    CourseComponent,
    CounsellingComponent,
    UpdateLeadsComponent,
    LeadHomeComponent,
    OpportunityDataLeadsComponent,
    WarmLeadsDataComponent,
    AttemptedLeadsDataComponent,
    ULoginComponent,
    StudentViewsComponent,
    JobFairComponent,
    TodayDataComponent,
    YesterdayDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
