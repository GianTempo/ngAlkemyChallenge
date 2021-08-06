import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private heroSvc: HeroService) { }

  heroes: any[] = [];

  ngOnInit(): void {
    this.getHero(5)
    this.getHero(10)
  }

  getHero(id:number) {
    this.heroSvc.getHeroe(id).then(
      (res) => {
        console.log(res)
        this.heroes.push(res.data)
      },
      (err) => {
        console.log(err)
      }
    )
    
  }
}
