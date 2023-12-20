import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../Component/dialog-content/dialog-content.component';
import { MemberComponent } from '../Component/member/member.component';
import { DialogmemberComponent } from '../Component/dialogmember/dialogmember.component';
import { DialoghuntingComponent } from '../Component/dialoghunting/dialoghunting.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openDialog():void{
    this.dialog.open(DialogContentComponent,{
      width :'600px',
      maxHeight:'90vh'
    })
  }
  openDialogMember(data:any){
    this.dialog.open(DialogmemberComponent,{
      data:data,
      width :'600px',
      maxHeight:'90vh'
    })


  }

  openDialogHunting(data:any){
    this.dialog.open(DialoghuntingComponent,{
      data:data,
      width :'600px',
      maxHeight:'90vh'
    })

    
  }

}
