import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/Model/member';
import { MemberService } from 'src/app/Service/member.service';
import {Identity} from 'src/app/Enums/identity';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogmember',
  templateUrl: './dialogmember.component.html',
  styleUrls: ['./dialogmember.component.css']
})
export class DialogmemberComponent implements OnInit{
  constructor(private fb : FormBuilder,private service : MemberService,@Inject(MAT_DIALOG_DATA) public data: any){
    this.code = data;
  }
  myForm!:FormGroup;
  member: Member = new Member();
  code: string = '';
  identity = Identity;
  ngOnInit(): void {
    
    console.log("hello world this is dialog member compo");
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      identity: ['', [Validators.required]],
      identityNumber: ['', [Validators.required]],
      // competitionCode: ['', [Validators.required]],
    });
  }



  Submit(){
    if (this.myForm.valid) {
      // Form is valid, handle the submission here
      //console.log('Form data submitted:', this.myForm.value);
      this.member = this.myForm.value;
      this.member.competitionCode = this.code;
      console.log(this.member);
      this.service.InsertMember(this.member).subscribe((res : any)=>{
        console.log(res);
        console.log("member created successfully");
      },(err)=>{
        console.log(err);

      })
    } else {
      console.log('Form data is invalid. Please check the fields.');
    }
  }
  
}



