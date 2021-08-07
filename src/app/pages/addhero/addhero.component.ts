import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/services/hero.service';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

  constructor(private herosvc: HeroService) { }

  heroes: any[]
  success:boolean = false;

  ngOnInit(): void {
  }

  searchHero(e: any) {
    this.herosvc.searchHeroe(e).then(res => {this.heroes = res.data.results});
  }

  addHero(e: any) {
    this.herosvc.getHeroe(e).then(res => {this.herosvc.addHeroe(res.data), this.success = true});
  }
}
