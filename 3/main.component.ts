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

  constructor() { this.imie = "cosik"; this.styl = ""}

  ngOnInit(): void {}


  showImie(){
    this.imie = "Krzysztof C"
  }

  closeForm() {
    this.showForm = false;
  }

  style1() {
    if (this.styl.includes("dwpx")){

    }
    else this.styl += "dwpx "
  }

  style2(){
    if (this.styl.includes("grstr")){

    }
    else this.styl += "grstr "
  }
}
