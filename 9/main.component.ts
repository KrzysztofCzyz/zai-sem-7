import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: [ './main.style.css']
})
export class MainComponent implements OnInit {

  ilosc: number
  zdjecie: string[]
  ilosc_zdjec: number

  constructor() { this.ilosc = 0; this.zdjecie= ['zdj.png','zdj2.jpg','zdj3.png']; this.ilosc_zdjec = this.zdjecie.length}

  ngOnInit(): void {}

  add(number: number) {
    if ( this.ilosc+number<0){
      alert("Pierwsze zdjecie kolego")
    }
    else if (this.ilosc+number>this.ilosc_zdjec-1){
      alert("Za daleko kolego")
    }
    else this.ilosc+=number

  }
}
