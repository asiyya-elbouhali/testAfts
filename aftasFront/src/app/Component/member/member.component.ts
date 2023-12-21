import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Model/member';
import { MemberService } from 'src/app/Service/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle,faCalendar,faAddressCard,faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';
import { PageEvent } from '@angular/material/paginator';
import { HuntingService } from '../../Service/hunting.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  facofe = faPlusCircle;
  date = faCalendar;
  identity = faAddressCard;
  competitioncode :any;
  members : Member[] = [];
  totalPage :any;
  pageSize = 6;
  code: string = '';
  pageIndex = 0;
  constructor(private service:MemberService,private route: ActivatedRoute,private dialog : DialogService,    private huntingService: HuntingService,     private router: Router  ) {}
  ngOnInit(): void {
    this.competitioncode = this.route.snapshot.paramMap.get('code');
    this.route.params.subscribe(params => {
      this.code = params['code'];
    });
    console.log("ygu",this.code);
    this.fetchMembers(this.competitioncode);
  }


  fetchMembers(code : String){
    const startindex = this.pageIndex * this.pageSize;
    const endIndex = startindex + this.pageSize;
    this.service.GetMembers(code,startindex).subscribe((res : any)=>{
      console.log(res);
      this.members = res.members;
      console.log(this.members);
      this.totalPage = res.totalPages;
    })
  } 

  getHuntingsData(code: string): void {
    this.huntingService.fetchHuntings(code).subscribe(
      (data) => {
         console.log('Huntings data:', data);
       },
      (error) => {
         console.error('Error fetching huntings data:', error);
      }
    );
  }

  openDialog(){
    this.dialog.openDialogMember(this.competitioncode);
  }

  onPageChange(event : PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchMembers(this.competitioncode);
  }

  openDialogHunting(mem : any){
    console.log(mem);
    const code = this.competitioncode;
    const data ={
      mem,code
    }
    this.dialog.openDialogHunting(data);
  }

}
