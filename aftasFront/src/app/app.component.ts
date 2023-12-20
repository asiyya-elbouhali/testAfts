import { Component } from '@angular/core';
import { faPlusCircle,faCalendar,faPlayCircle,faUsers,faLocationDot,faRankingStar,faFishFins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AftasAngular';
  rank = faRankingStar;
  users = faUsers;
  fish = faFishFins;
}
