import { Component, OnInit } from '@angular/core';
import { Member } from '../../Model/member';
import { MemberService } from '../../Service/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  winners: Member[] = [];
  competitionCode: string = '';

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.fetchCompetitionCode();
    this.fetchWinners();
  }
  fetchCompetitionCode(): void {
    this.route.paramMap.subscribe(params => {
      this.competitionCode = params.get('code') || '';
    });
  }
  fetchWinners(): void {
    this.memberService.GetWinners(this.competitionCode).subscribe((data: Member[]) => {
      this.winners = data;
      console.log("hi hi heyyy",data);
      
    });
  }

}
