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
  success: boolean = false
  failure: boolean = false

  ngOnInit(): void {
  }

  searchHero(e: any) {
    this.success = false;
    this.failure = false;
    this.herosvc.searchHeroe(e).then(res => {this.heroes = res.data.results});
  }

  addHero(e: any) {
    this.success = false;
    this.failure = false;
    this.herosvc.getHeroe(e).then(res => {
      console.log(res.data.biography.alignment)
      let status = this.herosvc.addHeroe(res.data)
      if (status == 'Too many heroes') { //Check if there's too many heroes in the team. (>=3)
        this.failure = true
      }
      else if(status == 'Added') //The hero could be added succesfully
      {
        this.success = true
        this.failure = false
      }
    });
  }
}
