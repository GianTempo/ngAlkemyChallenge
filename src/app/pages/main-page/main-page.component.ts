import { Component, OnInit } from '@angular/core';
import { Team } from '@app/models/team.interface';
import { HeroService } from '@app/services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private heroSvc: HeroService) { }

  team: Team
  maxstat: string = ''

  ngOnInit(): void {
    this.team = this.heroSvc.getTeam()
    this.setMaxStat()
  }


  /**
   * @function setMaxStat
   * This function sorts the team's stats to get the max stat of it.
  */
  setMaxStat(): void {
    let keys = [],
    k, maxStat, maxvalue;

    for (k in this.team.stats) {
    if (this.team.stats.hasOwnProperty(k)) {
      keys.push(k);
    }
    }

    if (this.team.stats[keys[0]] > this.team.stats[keys[1]]) { //Get the max stat from the first two stats
      maxStat = [keys[0]]
      maxvalue = this.team.stats[keys[0]]
    }
    else {
      maxStat = [keys[1]]
      maxvalue = this.team.stats[keys[1]]
    }

    for (let i = 1; i < 6; i++) { //sort array to get the max stat of the team
      if (this.team.stats[keys[i]] > maxvalue) {
        maxStat = [keys[i]]
        maxvalue = this.team.stats[keys[i]]
      }
    }
    this.maxstat = maxStat[0];
  }
}
