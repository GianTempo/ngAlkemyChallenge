import { Component, Input, OnInit } from '@angular/core';
import { Team } from '@app/models/team.interface';

@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.css']
})
export class TeamcardComponent implements OnInit {

  @Input() teamStats: {strength: number,
    intelligence: number,
    speed: number,
    power: number,
    combat: number,
    durability: number,
    avgWeight: number,
    avgHeight: number
  }
  @Input() maxStat: string
  constructor() { }

  ngOnInit(): void {
  }

}
