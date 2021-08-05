import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/services/hero.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private heroSvc: HeroService) { }

  ngOnInit(): void {
  }

}
