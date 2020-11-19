import {of,fromEvent} from 'rxjs';
import {reduce, scan, share, take,map} from "rxjs/operators";


class Raz{

    constructor() {
        this.p1 = document.getElementById("p1")
        this.p2 = document.getElementById("p2")
        this.pole = fromEvent(document.getElementById("oblicz"), 'click')
            .subscribe(() => isNaN(parseInt(this.p1.value)) ? alert("To nie liczba "+this.p1.value) : (isNaN(parseInt(this.p2.value)) ? alert("To nie liczba "+this.p2.value) : alert(this.p1.value * this.p2.value)))




    }
}
let x =new Raz()