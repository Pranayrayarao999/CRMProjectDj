import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leads } from 'src/app/Models/LeadsDatas/leads';

@Injectable({
  providedIn: 'root'
})
export class CreateleadService {

  constructor(private Http:HttpClient) { }

  CreateLeadUrl: string ="http://127.0.0.1:3000/api/leads/";

  CreateLeadData(LeadData : Leads){
    return this.Http.post<any>(this.CreateLeadUrl,LeadData);
  }
  
}
