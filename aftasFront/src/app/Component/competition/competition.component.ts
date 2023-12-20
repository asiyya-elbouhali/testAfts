import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/Model/competition';
import { CompetitionService } from 'src/app/Service/competition.service';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle,faCalendar,faPlayCircle,faUsers,faLocationDot,faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})


export class CompetitionComponent implements OnInit {
  competitions : Competition[] =[];
  facofe = faPlusCircle;
  date = faCalendar;
  play = faPlayCircle;
  users = faUsers;
  
  city = faLocationDot;
  myForm!: FormGroup;
  totlaPage : any;
  pageSize = 6;
  pageIndex = 0;
  constructor(private service : CompetitionService,private dialog : DialogService,private fb :FormBuilder){}
  ngOnInit(): void {
    this.getCompetitoin();
    
  }

  

  getCompetitoin(){

    const startindex = this.pageIndex * this.pageSize;
    const endIndex = startindex + this.pageSize;
    this.service.GetCompetition(startindex).subscribe((res : any)=>{
      const comp = res.competitions;
      this.competitions = comp;
      console.log(this.competitions);
      console.log("total pages " + res.totalPages);
      this.totlaPage = res.totalPages;
    },(err)=>{
      
      console.log("error fetching competition");
    })
  }

  

  openDialog(){
    this.dialog.openDialog();
  }
  

  onPageChange(event : PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCompetitoin();
  }

 
}
