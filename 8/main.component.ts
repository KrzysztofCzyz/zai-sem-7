import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  ilosc: number

  constructor() { this.ilosc = 0;}

  ngOnInit(): void {}

  add(number: number) {
    this.ilosc+=number
  }
}
