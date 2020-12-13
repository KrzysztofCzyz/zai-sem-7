import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  imie: string
  styl: string
  strlist: string[]

  constructor() { this.imie = "cosik"; this.styl = "b";this.strlist=["b","y"]}

  ngOnInit(): void {}

  changeStyle(str){
    this.styl=str
  }
}
