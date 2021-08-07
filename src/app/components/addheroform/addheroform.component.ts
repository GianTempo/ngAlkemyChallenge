import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addheroform',
  templateUrl: './addheroform.component.html',
  styleUrls: ['./addheroform.component.css']
})
export class AddheroformComponent implements OnInit {

  @Output() addHero = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  submit(input:any): void {
    this.addHero.emit(input.value)
    input.value = ''
  }

}
