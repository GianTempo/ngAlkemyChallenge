import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css']
})
export class HerocardComponent implements OnInit {

  @Input() heroes: []

  constructor() { }

  ngOnInit(): void {
    
  }
}
