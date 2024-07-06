import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Leads } from 'src/app/Models/LeadsDatas/leads';
import { UpdateLeads } from 'src/app/Models/LeadsDatas/update-leads';
import { GtLeadsDataService } from 'src/app/Services-Api/LeadsDataServices/GetLeadsData/gt-leads-data.service';

@Component({
  selector: 'app-update-leads',
  templateUrl: './update-leads.component.html',
  styleUrls: ['./update-leads.component.css']
})
export class UpdateLeadsComponent implements OnInit{

  UpdateLeadForm: FormGroup;
  id!:any;
  // loading: boolean = true

  constructor(private fb:FormBuilder, private router:Router, private updateLeadsDataServce:GtLeadsDataService, private route: ActivatedRoute){

    this.UpdateLeadForm = this.fb.group({
      id:[''],
      name: ['', [Validators.required,Validators.maxLength(255)]],
      cc: ['', Validators.required],
      contact_no: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email,Validators.maxLength(255)]],
      fee_coated: ['', [Validators.required,Validators.maxLength(10)]],
      description: ['',Validators.required],
      date: ['', Validators.required],
      lead_source: ['', [Validators.required,Validators.maxLength(20)]],
      batch_timing: ['', [Validators.required,Validators.maxLength(10)]],
      class_mode: ['', [Validators.required,Validators.maxLength(20)]],
      lead_status: ['', [Validators.required,Validators.maxLength(12)]],
      courses: ['',[ Validators.required,Validators.maxLength(20)]],
      tech_stack: ['', [Validators.required,Validators.maxLength(20)]],
    });

    //TO RETRIEVE SINGLE DATA BY USING ID
    this.id=this.route.snapshot.paramMap.get('id');
    this.updateLeadsDataServce.getSingleLead(this.id).subscribe(response =>{
      this.UpdteLead=response;
      console.log(response);
      // this.loading= false
    });
  }

  UpdteLead!:any;

  ngOnInit():void{
    console.log(this.token)
    
  }    
  
  onUpdate(){
    console.log(this.UpdateLeadForm);
    this.updateLeadsDataServce.UpdateLeadData(this.id,this.UpdteLead).subscribe(
      result =>{
        console.log("LEAD UPDATED");
        alert("LEAD UPDATED..!!");
        this.router.navigateByUrl('TodayLeads');
      }
    )
  }

  Cancel(){
    this.UpdateLeadForm.reset();
    this.router.navigateByUrl('TodayLeads');
  }

  token:string=window.localStorage.getItem('tgt');
  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']); 
  }
}
