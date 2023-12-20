import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Model/member';
import { MemberService } from 'src/app/Service/member.service';
import { ActivatedRoute } from '@angular/router';
import { faPlusCircle,faCalendar,faAddressCard,faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';
import { PageEvent } from '@angular/material/paginator';


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
  pageIndex = 0;
  constructor(private service:MemberService,private route: ActivatedRoute,private dialog : DialogService) {}
  ngOnInit(): void {
    this.competitioncode = this.route.snapshot.paramMap.get('code');
    console.log("hello world member");
    console.log(this.competitioncode);
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
