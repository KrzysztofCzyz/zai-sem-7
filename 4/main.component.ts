import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  imie: string
  styl: string

  constructor() { this.imie = "cosik"; this.styl = "default "}

  ngOnInit(): void {}


  showImie(){
    this.imie = "Krzysztof C"
  }

  style1() {
    if (this.styl.includes("dwpx")){
      this.styl = this.styl.replace("dwpx", "")
    }
    else this.styl += "dwpx "
  }

  style2(){
    if (this.styl.includes("grstr")){
      this.styl = this.styl.replace("grstr", "")
    }
    else this.styl += "grstr "
  }
}
