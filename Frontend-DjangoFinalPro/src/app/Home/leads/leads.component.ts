import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { CreateleadService } from 'src/app/Services-Api/LeadsDataServices/CreateLeadsData/createlead.service';
import { Router } from '@angular/router'
import { Leads } from 'src/app/Models/LeadsDatas/leads';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent{

  CreateLeadForm: FormGroup;
  LeadData: Leads;

  constructor(private createLeadServce:CreateleadService, private router:Router,private fb:FormBuilder){

    this.CreateLeadForm = this.fb.group({
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
  }

  
  onSubmit(){
    if (this.CreateLeadForm.valid) {
      this.LeadData = this.CreateLeadForm.value;
      console.log('Form Data: ', this.LeadData);
      this.createLeadServce.CreateLeadData(this.LeadData).subscribe(
        response =>{
          console.log("STUDENT LEADS DATA ADDED");
          console.log(response);
          alert("LEAD DATA ADDED");
          this.router.navigateByUrl('TodayLeads');
          this.CreateLeadForm.reset();
        })
    }
    else{
      console.error("FORM IS INVALID");
      alert("ERROR....PLEASE CHECK THE DATA AND RESEND");
    }
  }

  // CreateLeadForm=new FormGroup({
  //   name:new FormControl('',[Validators.required,Validators.maxLength(255)]),
  //   cc:new FormControl(''),
  //   contact_no:new FormControl('',[Validators.required, Validators.pattern('^\d{10}$')]),
  //   email:new FormControl('',[Validators.required,Validators.maxLength(255)]),
  //   fee_coated:new FormControl('',[Validators.required]),
  //   description:new FormControl(),
  //   date:new FormControl('',[Validators.required]),

  //   lead_source:new FormControl('',[Validators.required,Validators.maxLength(20)]),
  //   batch_timing:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  //   class_mode:new FormControl('',[Validators.required,Validators.maxLength(20)]),
  //   lead_status:new FormControl('',[Validators.required,Validators.maxLength(12)]),
  //   courses:new FormControl('',[Validators.required,Validators.maxLength(20)]),
  //   tech_stack:new FormControl('',[Validators.required,Validators.maxLength(20)])
  // })

  // LeadData:Leads;
  // onSubmit(){
  //   this.LeadData=this.CreateLeadForm.value;
  //   console.log(this.LeadData);
  //   this.createLeadServce.CreateLeadData(this.LeadData).subscribe(
  //     response =>{
  //       console.log("STUDENT LEADS DATA ADDED");
  //       console.log(response);
  //       alert("LEAD DATA ADDED");
  //     },
  //     error =>{
  //       console.log(error);
  //       alert('ERROR..PLEASE TRY AFTER SOME TIME');
  //     }
  //   )
  // }

  Cancel() {
    this.CreateLeadForm.reset();
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

