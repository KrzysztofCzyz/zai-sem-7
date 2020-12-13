import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  imie: string
  showForm:boolean = false;
  styl: string

  constructor() { this.imie = "cosik"; this.styl = "lmao"}

  ngOnInit(): void {}


  showImie(){
    this.imie = "Krzysztof C"
  }

  closeForm() {
    this.showForm = false;
  }

  style1() {
      this.styl = "dwpx"
  }

  style2(){
    this.styl = "grstr"
  }
}
