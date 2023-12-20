import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Competition } from 'src/app/Model/competition';
import { CompetitionService } from 'src/app/Service/competition.service';


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
  
})
export class DialogContentComponent implements OnInit{
  constructor(private fb :FormBuilder,private service:CompetitionService){}
  myForm!:FormGroup;

  compet =  new Competition();
  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      date: ['', [Validators.required, this.isValidDate]],
      startTime: ['', [Validators.required]],
      location: ['', [Validators.required]],
      numberOfParticipants: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      endTime: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    });
  }
  isValidDate(control:any) {
    const inputDate = new Date(control.value);
    return !isNaN(inputDate.getTime()) ? null : { invalidDate: true };
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1; 
    let day: string | number = today.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

  Submit() {
    if (this.myForm.valid) {
      // Form is valid, handle the submission here
      //console.log('Form data submitted:', this.myForm.value);
      this.compet = this.myForm.value;
      console.log(this.compet);
      this.service.InsertCompetition(this.compet).subscribe((res)=>{
        console.log(res);
        console.log("inseted");
        // this.ShowSucess("inserted successfully");
      },(err)=>{
        // this.showFailure("something wrong");
        console.log(err);
      });
    } else {
      // Form is invalid, display an error notification or handle as needed
      console.log('Form data is invalid. Please check the fields.');
      // this.showFailure("Form data is invalid. Please check the fields.");
    }
  }

  // ShowSucess(message : any){
  //   this.toast.success(message, 'Toastr fun!');
  // }
  // showFailure(message : any){
  //   this.toast.error(message,'error');
  // }

}
