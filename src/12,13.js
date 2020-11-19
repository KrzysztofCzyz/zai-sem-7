import {of,fromEvent} from 'rxjs';
import {reduce, scan, share, take,map} from "rxjs/operators";

function xd(){
    document.getElementById("paragraf").innerHTML = document.getElementById("pole").value.toString()
}
var i =0

class Raz{

    constructor() {
        this.pole = fromEvent(document.getElementById("pole"), 'input')
            .subscribe(e => document.getElementById("pole").value.toString().length > 5 ? xd() : i++)



    }
}
let x =new Raz()