import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountDataLeadsService {

  constructor(private Http:HttpClient) { }

  // COUNT OF LEADS
  opportunitycountleadsurl:string="http://127.0.0.1:3000/api/leads/opportunity_count";
  OpportunityCount(){
    return this.Http.get<any>(this.opportunitycountleadsurl);
  }

  warmleadscounturl:string="http://127.0.0.1:3000/api/leads/warmlead_count";
  WarmCount(){
    return this.Http.get<any>(this.warmleadscounturl);
  }

  attemptedleadscounturl:string="http://127.0.0.1:3000/api/leads/attempted_count";
  AttemptedCount(){
    return this.Http.get<any>(this.attemptedleadscounturl);
  }

  getallleadscount:string="http://127.0.0.1:3000/api/leads/alllead_count";
  GetallCount(){
    return this.Http.get<any>(this.getallleadscount);
  }

  // DATA RETRIEVING OF SPECIFIC LEADS
  GetOppertunityLeadUrl:string="http://127.0.0.1:3000/api/leads/?status=Opportunity";
  OpportunityLeadsData(){
    return this.Http.get<any>(this.GetOppertunityLeadUrl);
  }

  GetWarmLeadUrl:string="http://127.0.0.1:3000/api/leads/?status=WarmLead";
  WarmLeadsData(){
    return this.Http.get<any>(this.GetWarmLeadUrl);
  }

  GetAttemptedLeadUrl:string="http://127.0.0.1:3000/api/leads/?status=Attempted";
  AttemptedLeadsData(){
    return this.Http.get<any>(this.GetAttemptedLeadUrl);
  }

}
