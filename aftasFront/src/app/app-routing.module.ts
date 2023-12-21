import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './Component/competition/competition.component';
import { MemberComponent } from './Component/member/member.component';
import { RankingComponent } from './Component/ranking/ranking.component';

const routes: Routes = [
  {path:"competition",component:CompetitionComponent},
  {path:"member/:code",component:MemberComponent},
  {path:"member/winners/:code",component:RankingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
