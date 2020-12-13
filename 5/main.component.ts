import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  imie: string
  styl: string
  strlist: any[]
  poj: string;

  constructor() { this.imie = "cosik"; this.styl = "b";this.strlist=[{a: "x", s: ""}, {a: "y", s: ""}]}

  ngOnInit(): void {}

  changeStyle(o){
    o.s="y"
  }
}
