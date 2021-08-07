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
    k, maxStat;

    for (k in this.team.stats) {
    if (this.team.stats.hasOwnProperty(k)) {
      keys.push(k);
    }
    }
  
    for (k in keys) { //sort array to get the max stat of the team
      if (keys[k] !== 'avgHeight' && keys[k] !== 'avgWeight') { //sort only the stats that aren't avgHeight or avgWeight.
        this.team.stats[keys[k + 1]] > this.team.stats[keys[k]] ? maxStat = keys[k + 1] : maxStat = [keys[k]];
      }
    }
    this.maxstat = maxStat[0];
  }
}
