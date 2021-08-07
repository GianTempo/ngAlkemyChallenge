import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css']
})
export class HerocardComponent implements OnInit {

  @Input() hero: any
  @Input() cardType: string
  @Output() addHero = new EventEmitter<any>();
  @Output() removeHero = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

  addhero(id:number): void {
    this.addHero.emit(id)
  }

  removehero(id: number): void {
    this.removeHero.emit(id)
  }
}
